import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  gooleProvider,
  createUserProfileDocumnet
} from "../../firebase/firebase.utils";

import { userActionTypes } from "./user.types";
import { signInSuccess, signFailure } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocumnet, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signFailure(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(gooleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signFailure(err));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signFailure(error));
  }
}

export function* onGoogleSignStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSaga() {
  yield all([call(onGoogleSignStart), call(onEmailSignInStart)]);
}
