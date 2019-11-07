import { takeEvery, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import shopActionType from "./shop.type";
import { fetchCollectionsSucces, fetchCollectionsFailure } from "./shop.action";

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collection");
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSucces(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
