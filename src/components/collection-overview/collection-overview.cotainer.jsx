import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectShopFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collection-overview";
import WithSpinner from "../with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
  isFetching: selectShopFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
