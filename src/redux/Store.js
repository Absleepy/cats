import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";
const middlewares = [thunk];
export const store = createStore(reducer, applyMiddleware(...middlewares));
