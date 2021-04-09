import { userErrorAction, loadingAction} from '../actions/actions';
import firebase from '../../firebase/firebase-config';
export const logIn = (email, password) =>{ 
    return async dispatch  => { 
      loadingAction(true);
      try{
       await firebase.auth().signInWithEmailAndPassword(email, password); 
       }
      catch(err){    
        loadingAction(false);
          dispatch(userErrorAction(err.message))
      }
    } 
} 