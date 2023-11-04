import { applyMiddleware, combineReducers, createStore } from "redux";
import { wareHouseReducer } from "./reducers/wareHouseReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ wareHouse: wareHouseReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
