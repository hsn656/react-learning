import { createStore, combineReducers } from "redux";
import { counterReducer, toDosReducer } from "./reducers";

export const initialState = {
  todos: [],
  counter: 0,
};

// error due to circular dependencies
const reducers = combineReducers({
  counterReducer,
  toDosReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(reducers, enhancer());
