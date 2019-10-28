import shopActionType from "./shop.type";

export const updateCollection = collections => ({
  type: shopActionType.UPDATE_COLLECTIONS,
  payload: collections
});
