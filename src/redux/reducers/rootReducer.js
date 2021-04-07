
import { combineReducers } from 'redux';
import {cardsReducer} from './cards';
import {userReducer } from './userReducer';
export default combineReducers({
    cardsReducer,
    userReducer
})