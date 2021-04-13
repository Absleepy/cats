import { userErrorAction, loadingAction} from '../actions/actions';
import firebase from '../../firebase/firebase-config';
export const logIn = (email, password) =>{ 
    return async dispatch  => { 

      dispatch(loadingAction());
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        dispatch(userErrorAction(err.message));
      }
    } 
} 