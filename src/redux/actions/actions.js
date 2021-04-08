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
export const authSuccessAction = (user) =>{
  return {
    user
  }
}
export const loadingAction = (loading) => {
  return {
    type: types.LOADING,
    payload: loading
  };
};
export const userErrorAction = (error) => { 
  return {
    type: types.USER_ERROR,
    payload: error
  };
};
export const UserSuccessAction = (user) => { 
   return {
    type: types.USER_SUCCESS,
    payload: user
  };
};
export const logOutUserAction = () => { 
   return {
    type: types.LOG_OUT, 
 
  };
};
export const logInUserAction = (email,password) => { 
   return {
    type: types.LOG_IN,  
    payload: {
      email,
      password
    }
  };
};

