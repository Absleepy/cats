import { types } from "../Types";

const INITIAL_STATE = {
  user: {},
  error: "",
  pending: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
    case types.USER_ERROR :  
    return { 
      ...state,
      error: action.payload
    }
    case types.CREATE_USER : 
    return {
      ...state, 
      user: action.payload
    }
    default: return state
  }
};
