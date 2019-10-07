import React from "react";
import { connect } from "react-redux";

import CustumButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.action";

import "./collection-item.scss";

const collectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustumButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustumButton>
    </div>
  );
};

const mapDisptachToProps = dispach => ({
  addItem: item => dispach(addItem(item))
});

export default connect(
  null,
  mapDisptachToProps
)(collectionItem);
