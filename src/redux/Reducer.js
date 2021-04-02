import { types } from "./Types";

const INITIAL_STATE = {
  counter: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};
