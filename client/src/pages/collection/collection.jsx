import React from "react";
import { connect } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemContainer
} from "./collection.styles";

const collectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(collectionPage);
