import React from "react";

import "./cart-item.scss";

const cartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default cartItem;