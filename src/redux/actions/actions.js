import { types } from "../Types";

export const fetchPendingAction = () => {
  return {
    type: types.PENDING,
  };
};
export const fetchCatsAction = (cats) => {
  return {
    type: types.CATS,
    payload: cats,
  };
};

export const fetchErrorAction = (error) => {
  return {
    type: types.ERROR,
    error: error,
  };
};
