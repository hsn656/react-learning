import counterReducer from "./counterReducer";
import toDosReducer from "./toDosReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counterReducer,
  toDosReducer,
});

export default reducers;
