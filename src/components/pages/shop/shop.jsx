import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../collection-overview/collection-overview";
import collectionPage from "../collection/collection";

const ShopPages = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={collectionPage} />
    </div>
  );
};

export default ShopPages;
