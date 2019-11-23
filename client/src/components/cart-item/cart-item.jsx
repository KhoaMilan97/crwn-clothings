import React from "react";

import {
  CartItemContaienr,
  ItemDetails,
  CartItemsImg,
  CartItemsName
} from "./cart-item.styles";

const cartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <CartItemContaienr>
    <CartItemsImg src={imageUrl} alt="item" />
    <ItemDetails>
      <CartItemsName>{name}</CartItemsName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContaienr>
);

export default React.memo(cartItem);
