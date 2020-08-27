import { RelatedPanel } from "Components/Publishing/Fixtures/Components"
import { RelatedArticlesPanel } from "Components/Publishing/RelatedArticles/Panel/RelatedArticlesPanel"
import { mount } from "enzyme"
import "jest-styled-components"
import React from "react"
import { Sidebar } from "../Sidebar"

jest.mock(
  "Components/Publishing/Sections/FullscreenViewer/withFullScreen",
  () => ({
    withFullScreen: x => x,
  })
)

it("renders related articles", () => {
  const sidebar = mount(<Sidebar relatedArticlesForPanel={RelatedPanel} />)
  expect(sidebar.find(RelatedArticlesPanel).length).toBe(1)
})
