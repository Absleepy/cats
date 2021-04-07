import { types } from "../Types";

const INITIAL_STATE = {
  cats: [],
  error: "",
  pending: false,
};

export const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PENDING:
      return { ...state, pending: true };
    case types.CATS:
      return { ...state, pending: false, cats: action.payload };
    case types.ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
