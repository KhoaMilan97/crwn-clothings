import shopActionType from "./shop.type";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case shopActionType.FETCH_COLLECTIONS_SUCCES:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case shopActionType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
