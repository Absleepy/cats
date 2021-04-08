import {logInUserAction, userErrorAction, loadingAction} from '../actions/actions';
export const logIn = (email, password) =>{ 
    return async dispatch  => { 
      loadingAction(true);
      try{
       await dispatch(logInUserAction(email, password)); 
       loadingAction(false);
       }
      catch(err){   
        console.log("tests", err)
        loadingAction(false);
          dispatch(userErrorAction(err.message))
      }
    } 
} 