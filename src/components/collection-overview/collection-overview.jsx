import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopColletionOverview } from "../../redux/shop/shop.selectors";

import "./collection-overview.scss";

const collectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...othercollection }) => (
      <CollectionPreview key={id} {...othercollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopColletionOverview
});

export default connect(mapStateToProps)(collectionOverview);
