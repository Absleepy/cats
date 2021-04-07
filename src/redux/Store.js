import { applyMiddleware, createStore } from "redux";
import combineReducers from '../redux/reducers/rootReducer';
import thunk from "redux-thunk";
 const middlewares = [thunk];
export const store = createStore(combineReducers, applyMiddleware(...middlewares));
