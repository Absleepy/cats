import firebase from '../../firebase/firebase-config';
import {UserSuccessAction, userErrorAction} from '../actions/actions';
export const registerUser = (name, email, password) =>{
     return async dispatch  => { 
      try{
      
    const auth = await firebase.auth().createUserWithEmailAndPassword(email, password);
    
      //create user in firestore with doc set to user.uid
     await firebase.firestore().collection("users").doc(auth?.user?.uid).set({
        name,
        email,
     })

     const user = await firebase.firestore().collection("users").doc(auth?.user?.uid).get();
     dispatch(UserSuccessAction(user.data()))

    }
      catch(err){   
          dispatch(userErrorAction(err.message))
      }
    }
}