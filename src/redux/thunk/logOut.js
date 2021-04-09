import firebase from '../../firebase/firebase-config';
import {loadingAction, userErrorAction} from '../actions/actions';
export const logOut = () =>{
  return async dispatch  => {  
    try{
      await firebase.auth().signOut(); 
     }
    catch(err){     
        dispatch(userErrorAction(err.message))
    }
  } 
}