import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import CartItems from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(cartDropdown);
