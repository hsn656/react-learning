import { INCREMENT, DECREMENT } from "../actions/counter";
import { ADD_TASK, REMOVE_TASK } from "../actions/todos";

import { initialState } from "../index";

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: ++state.counter };
    case DECREMENT:
      return { counter: --state.counter };
    default:
      return state;
  }
};

export const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { todos: [...state.todos, action.payload] };
    case REMOVE_TASK:
      return { todos: state.todos.splice(action.payload, 0) };
    default:
      return state;
  }
};
