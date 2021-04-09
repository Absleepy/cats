import { types } from "../Types"; 
const INITIAL_STATE = {
  user: {},
  error: "",
  loading: false, 
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case types.loading : 
    return { 
      loading: action.payload.loading
    }
    case types.USER_ERROR :  
    return { 
      ...state,
      error: action.payload
    }
    case types.USER_SUCCESS : 
    return {
      ...state, 
      error: "",
      user: action.payload,
      loading:false,
    }
    
    case types.LOG_OUT : 
    return  {
      user: {},
  error: "",
  loading: false, 
    }
    
    
    default: return state
  }
};
