import { createStore } from "redux";
import reducers from "./reducers";

export const initialState = {
  todos: [],
  counter: 0,
};

// error due to circular dependencies

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(reducers, enhancer());
