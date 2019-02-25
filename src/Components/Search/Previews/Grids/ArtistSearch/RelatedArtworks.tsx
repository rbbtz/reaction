import { Box, Flex, Sans } from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { get } from "Utils/get"
import { Media } from "Utils/Responsive"

import { RelatedArtworksPreview_viewer } from "__generated__/RelatedArtworksPreview_viewer.graphql"
import { PreviewGridItemFragmentContainer as PreviewGridItem } from "../PreviewGridItem"

interface RelatedArtworksPreviewProps {
  viewer: RelatedArtworksPreview_viewer
}
export const RelatedArtworksPreview: React.SFC<RelatedArtworksPreviewProps> = ({
  viewer,
}) => {
  const artworks = get(
    viewer,
    x => x.filter_artworks.artworks_connection.edges,
    []
  ).map(x => x.node)

  const relatedArtworks = artworks.map((artwork, i) => (
    <Box width={["0%", "100%", "100%", "50%"]} key={i}>
      <PreviewGridItem artwork={artwork} emphasizeArtist />
    </Box>
  ))
  return (
    <Box>
      <Sans size="3" weight="medium" color="black100" mb={2}>
        Related Artworks
      </Sans>

      <Media lessThan="lg">
        <Flex alignItems="flex-start" flexWrap="wrap">
          {relatedArtworks.slice(0, 5)}
        </Flex>
      </Media>

      <Media greaterThan="md">
        <Flex alignItems="flex-start" flexWrap="wrap">
          {relatedArtworks}
        </Flex>
      </Media>
    </Box>
  )
}

export const RelatedArtworksPreviewFragmentContainer = createFragmentContainer(
  RelatedArtworksPreview,
  graphql`
    fragment RelatedArtworksPreview_viewer on Viewer
      @argumentDefinitions(entityID: { type: "String!" }) {
      filter_artworks(
        aggregations: [TOTAL]
        sort: "-decayed_merch"
        artist_id: $entityID
      ) {
        __id
        artworks_connection(first: 10) {
          edges {
            node {
              ...PreviewGridItem_artwork
            }
          }
        }
      }
    }
  `
)
