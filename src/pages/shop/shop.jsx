import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";
import { updateCollection } from "../../redux/shop/shop.action";

import WithSpinner from "../../components/with-spinner/with-spinner";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPages extends React.Component {
  state = {
    loading: true
  };

  unscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionsRef = firestore.collection("collection");

    collectionsRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  updateCollection: collections => dispatch(updateCollection(collections))
});

export default connect(
  null,
  mapDisptachToProps
)(ShopPages);
