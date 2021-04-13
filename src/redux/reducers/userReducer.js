import { types } from "../Types"; 
const INITIAL_STATE = {
  user: {},
  error: "",
  loading: false, 
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
    switch (action.type) {
      case types.LOADING:
        return {
          loading: true,
        };
      case types.USER_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case types.LOG_IN:
        return {
          ...state,
          error: "",
          user: action.payload,
          loading: false,
        };

      case types.LOG_OUT:
        return {
          user: {},
          error: "",
          loading: false,
        };

      default:
        return state;
    }
};
