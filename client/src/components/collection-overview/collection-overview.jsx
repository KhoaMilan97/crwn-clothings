import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopColletionOverview } from "../../redux/shop/shop.selectors";

import { CollectionOverviewContaienr } from "./collection-overview.styles";

const collectionOverview = ({ collections }) => (
  <CollectionOverviewContaienr>
    {collections.map(({ id, ...othercollection }) => (
      <CollectionPreview key={id} {...othercollection} />
    ))}
  </CollectionOverviewContaienr>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopColletionOverview
});

export default connect(mapStateToProps)(collectionOverview);
