import { Serif, color, space } from "@artsy/palette"
import { track } from "Artsy/Analytics"
import { RelatedArticlePanelData } from "Components/Publishing/Typings"
import React from "react"
import styled from "styled-components"
import { crop } from "../../../../Utils/resizer"
import { getEditorialHref } from "../../Constants"

interface RelatedArticlesPanelProps extends React.HTMLProps<HTMLDivElement> {
  article: RelatedArticlePanelData
}

@track()
export class RelatedArticlesPanelLink extends React.Component<
  RelatedArticlesPanelProps
> {
  static defaultProps = {
    label: "Related Stories",
  }

  render() {
    const { article } = this.props
    const href = getEditorialHref(article.layout, article.slug)
    const articleImageSrc = crop(article.thumbnail_image, {
      width: 160,
      height: 110,
    })

    return (
      <ArticleLink href={href}>
        <ArticleImage src={articleImageSrc} />
        <Serif size="4t" color={color("black100")}>
          {article.thumbnail_title}
        </Serif>
      </ArticleLink>
    )
  }
}

export const ArticleLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: left;
  margin-bottom: ${space(2)}px;
`

const ArticleImage = styled.img`
  min-width: 80px;
  height: 55px;
  margin-right: ${space(1)}px;
`
