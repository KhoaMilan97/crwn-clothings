import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import {
  CollectionItemFooter,
  CollectionItemImage,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
  AddButton
} from "./collection-item.styles";

const collectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionItemFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionItemFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDisptachToProps = dispach => ({
  addItem: item => dispach(addItem(item))
});

export default connect(
  null,
  mapDisptachToProps
)(collectionItem);
