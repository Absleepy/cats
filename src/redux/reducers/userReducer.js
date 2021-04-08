import { types } from "../Types";
import firebase from '../../firebase/firebase-config';
const INITIAL_STATE = {
  user: {},
  error: "",
  loading: false, 
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
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
    case types.CREATE_USER : 
    return {
      ...state, 
      user: action.payload
    }
    case types.LOG_OUT : 
    return firebase.auth().signOut();
    case types.LOG_IN : 
    return firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password);
    
    default: return state
  }
};
