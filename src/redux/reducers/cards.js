import { types } from "../Types";

const INITIAL_STATE = {
  cats: [],
  error: "",
  loading: false,
};

export const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.CATS:
      return { ...state, loading: false, cats: action.payload };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
