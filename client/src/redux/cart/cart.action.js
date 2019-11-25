import cartType from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartType.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartType.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: cartType.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: cartType.CLEAR_CART
});

export const setCartFromFirebase = cartItems => ({
  type: cartType.SET_CART_FROM_FIREBASE,
  payload: cartItems
});

export const updateCartFromFirebase = () => ({
  type: cartType.UPDATE_CART_FROM_FIREBSE
});
