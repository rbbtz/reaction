/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ConsignRoute_Test_QueryVariables = {
    artistID: string;
    recentlySoldArtworkIDs: ReadonlyArray<string | null>;
};
export type ConsignRoute_Test_QueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"Consign_artist">;
    } | null;
    readonly artworksByInternalID: ReadonlyArray<{
        readonly internalID: string;
        readonly image: {
            readonly aspectRatio: number;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"FillwidthItem_artwork">;
    } | null> | null;
};
export type ConsignRoute_Test_QueryRawResponse = {
    readonly artist: ({
        readonly name: string | null;
        readonly id: string | null;
    }) | null;
    readonly artworksByInternalID: ReadonlyArray<({
        readonly internalID: string;
        readonly image: ({
            readonly aspectRatio: number;
            readonly url: string | null;
            readonly aspect_ratio: number;
        }) | null;
        readonly href: string | null;
        readonly title: string | null;
        readonly date: string | null;
        readonly sale_message: string | null;
        readonly cultural_maker: string | null;
        readonly artists: ReadonlyArray<({
            readonly id: string;
            readonly href: string | null;
            readonly name: string | null;
        }) | null> | null;
        readonly collecting_institution: string | null;
        readonly partner: ({
            readonly name: string | null;
            readonly href: string | null;
            readonly id: string | null;
            readonly type: string | null;
        }) | null;
        readonly sale: ({
            readonly is_auction: boolean | null;
            readonly is_closed: boolean | null;
            readonly id: string | null;
            readonly is_live_open: boolean | null;
            readonly is_open: boolean | null;
            readonly is_preview: boolean | null;
            readonly display_timely_at: string | null;
        }) | null;
        readonly sale_artwork: ({
            readonly counts: ({
                readonly bidder_positions: number | null;
            }) | null;
            readonly highest_bid: ({
                readonly display: string | null;
            }) | null;
            readonly opening_bid: ({
                readonly display: string | null;
            }) | null;
            readonly id: string | null;
        }) | null;
        readonly is_inquireable: boolean | null;
        readonly id: string;
        readonly slug: string;
        readonly is_saved: boolean | null;
        readonly is_biddable: boolean | null;
        readonly is_acquireable: boolean | null;
        readonly is_offerable: boolean | null;
    }) | null> | null;
};
export type ConsignRoute_Test_Query = {
    readonly response: ConsignRoute_Test_QueryResponse;
    readonly variables: ConsignRoute_Test_QueryVariables;
    readonly rawResponse: ConsignRoute_Test_QueryRawResponse;
};



/*
query ConsignRoute_Test_Query(
  $artistID: String!
  $recentlySoldArtworkIDs: [String]!
) {
  artist(id: $artistID) {
    ...Consign_artist
    id
  }
  artworksByInternalID(ids: $recentlySoldArtworkIDs) {
    internalID
    image {
      aspectRatio
    }
    ...FillwidthItem_artwork
    id
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Consign_artist on Artist {
  name
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FillwidthItem_artwork on Artwork {
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "recentlySoldArtworkIDs",
    "type": "[String]!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "recentlySoldArtworkIDs"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "aspectRatio",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v9 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ConsignRoute_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Consign_artist",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworksByInternalID",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "Artwork",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "FillwidthItem_artwork",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ConsignRoute_Test_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artworksByInternalID",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "Artwork",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "large"
                  }
                ],
                "storageKey": "url(version:\"large\")"
              },
              {
                "kind": "ScalarField",
                "alias": "aspect_ratio",
                "name": "aspectRatio",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v7/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "sale_message",
            "name": "saleMessage",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "cultural_maker",
            "name": "culturalMaker",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": "artists(shallow:true)",
            "args": (v8/*: any*/),
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v5/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "collecting_institution",
            "name": "collectingInstitution",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": "partner(shallow:true)",
            "args": (v8/*: any*/),
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v7/*: any*/),
              (v6/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sale",
            "storageKey": null,
            "args": null,
            "concreteType": "Sale",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "is_auction",
                "name": "isAuction",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "is_closed",
                "name": "isClosed",
                "args": null,
                "storageKey": null
              },
              (v6/*: any*/),
              {
                "kind": "ScalarField",
                "alias": "is_live_open",
                "name": "isLiveOpen",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "is_open",
                "name": "isOpen",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "is_preview",
                "name": "isPreview",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "display_timely_at",
                "name": "displayTimelyAt",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "sale_artwork",
            "name": "saleArtwork",
            "storageKey": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "counts",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCounts",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": "bidder_positions",
                    "name": "bidderPositions",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "highest_bid",
                "name": "highestBid",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkHighestBid",
                "plural": false,
                "selections": (v9/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": "opening_bid",
                "name": "openingBid",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkOpeningBid",
                "plural": false,
                "selections": (v9/*: any*/)
              },
              (v6/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "is_inquireable",
            "name": "isInquireable",
            "args": null,
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "slug",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_saved",
            "name": "isSaved",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_biddable",
            "name": "isBiddable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_acquireable",
            "name": "isAcquireable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_offerable",
            "name": "isOfferable",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ConsignRoute_Test_Query",
    "id": null,
    "text": "query ConsignRoute_Test_Query(\n  $artistID: String!\n  $recentlySoldArtworkIDs: [String]!\n) {\n  artist(id: $artistID) {\n    ...Consign_artist\n    id\n  }\n  artworksByInternalID(ids: $recentlySoldArtworkIDs) {\n    internalID\n    image {\n      aspectRatio\n    }\n    ...FillwidthItem_artwork\n    id\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Consign_artist on Artist {\n  name\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd48de305a8089405b6243317b6d18d6e';
export default node;