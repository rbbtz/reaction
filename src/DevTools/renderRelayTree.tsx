import { ContextProps } from "Artsy"
import { LoadingClassName } from "Artsy/Relay/renderWithLoadProgress"
import React from "react"
import { MockRelayRenderer, MockRelayRendererProps } from "./MockRelayRenderer"
import { renderUntil, RenderUntilCallback } from "./renderUntil"

/**
 * Renders a tree of Relay containers with a mocked local instance of the
 * metaphysics schema and resolves the returned promise once loading data and
 * rendering (including waterfall requests) has finished.
 * 
 * It does this by checking the tree for the existence of an element with the
 * class defined by `LoadingClassName` from the `renderWithLoadProgress` module.
 * I.e. as long as at least 1 element exists in the tree with that class name,
 * rendering is not considered finished. Use the `renderWithLoadProgress`
 * function for your `QueryRenderer` where possible, as it will do this plumbing
 * by default.
 * 
 * @note
 * Use this function in tests, but not storybooks. For storybooks you should
 * usually use {@link MockRelayRenderer}.
 *
 * @param params
 * See {@link MockRelayRenderer}
 *
 * @param until
 * An optional callback that is used to test wether rendering should be
 * considered finished. This is a regular enzyme wrapper.
 * 
 * @param wrapper
 * An optional component that the Relay tree should be nested in. Use this to
 * e.g. setup any context provider components etc.
 *
 * @example
 *
   ```tsx
   jest.unmock("react-relay")
 
   const Artwork = createFragmentContainer(
     props => (
       <div>
         <span>{props.artwork.title}}</span>
         <img src={props.artwork.image.url} />
       </div>
     ),
     graphql`
       fragment MockRelayRenderer_artwork on Artwork {
         image {
           url
         }
       }
     `
   )

   it("renders a Relay tree", () => {
     return renderRelayTree({
       Component: Artwork,
       query: graphql`
         query MockRelayRendererQuery {
           artwork(id: "mona-lisa") {
             ...MockRelayRenderer_artwork
           }
         }
       `,
       mockResolvers: {
         Artwork: () => ({
           title: "Mona Lisa",
           image: {
             url: "http://test/image.jpg",
           },
         }),
       },
     }).then(wrapper => {
       expect(wrapper.find("span").text()).toEqual("Mona Lisa")
       expect(wrapper.find("img").props().src).toEqual("http://test/image.jpg")
     })
   })
   ```
 *
 */
export function renderRelayTree<
  P = {},
  S = {},
  C extends React.Component = React.Component
>(
  params: MockRelayRendererProps & {
    renderUntil?: RenderUntilCallback<P, S, C>
    wrapper?: (renderer: JSX.Element) => JSX.Element
    contextProps?: ContextProps
  }
) {
  const {
    Component,
    query,
    mockResolvers,
    renderUntil: renderUntilCallback,
    wrapper,
    contextProps,
  } = params
  const renderer = (
    <MockRelayRenderer
      Component={Component}
      mockResolvers={mockResolvers}
      query={query}
      contextProps={contextProps}
    />
  )
  return renderUntil<P, S, C>(
    renderUntilCallback || (tree => !tree.find(`.${LoadingClassName}`).length),
    wrapper ? wrapper(renderer) : renderer
  )
}
