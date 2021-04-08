import {logOutUserAction} from '../actions/actions';
export const logOut = () =>{
    return dispatch => {
      dispatch(logOutUserAction())  
    }
}