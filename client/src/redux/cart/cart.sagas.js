import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { userActionTypes } from "../user/user.types";
import { clearCart, setCartFromFirebase } from "../cart/cart.action";
import { getUserCartRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "./cart.selectors";
import cartType from "./cart.type";

export function* onClearCart() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser());
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartITems = yield select(selectCartItems);
      yield cartRef.update(cartITems);
    } catch (err) {
      console.log(err);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const snapShot = yield cartRef.get();
  yield put(setCartFromFirebase(snapShot.data().cartITems));
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onClearCart);
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [cartType.ADD_ITEM, cartType.REMOVE_ITEM, cartType.CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
