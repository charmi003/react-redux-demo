import { createStore } from "redux";
import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from "./iceCream/iceCreamReducer";

import { applyMiddleware } from "redux";
import ReduxLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from "./users/usersReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    users:usersReducer
});
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxLogger,thunkMiddleware)))

export default store;