import { types } from "../Types";


export const loadingAction = () => {
  return {
    type: types.LOADING,
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
 
export const userErrorAction = (error) => { 
  return {
    type: types.USER_ERROR,
    payload: error
  };
};
export const UserSuccessAction = (user) => { 
   return {
     type: types.LOG_IN,
     payload: user,
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

// CART

export const addToWishAction = (cat) => { 
   return {
    type: types.ADD_TO_WISH,  
    payload: cat
  };
};


