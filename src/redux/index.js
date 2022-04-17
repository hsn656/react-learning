import { createStore } from "redux";
import reducers from "./reducers";

// error due to circular dependencies

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(reducers, enhancer());
