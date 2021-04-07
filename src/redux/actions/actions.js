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
export const loadingAction = () => {
  return {
    type: types.LOADING,
  };
};
export const userErrorAction = (error) => { 
  return {
    type: types.USER_ERROR,
    payload: error
  };
};
export const createUserAction = (user) => { 
  console.log(user)
  return {
    type: types.CREATE_USER,
    payload: user
  };
};

