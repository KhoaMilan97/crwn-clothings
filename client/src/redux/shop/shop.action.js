import shopActionType from "./shop.type";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: shopActionType.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucces = collectionsMap => ({
  type: shopActionType.FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionsRef = firestore.collection("collection");
    dispatch(fetchCollectionsStart());

    collectionsRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSucces(collectionsMap));
      })
      .catch(err => dispatch(fetchCollectionsFailure(err.message)));
  };
};
