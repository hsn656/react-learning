import { ADD_TASK, REMOVE_TASK } from "../actions/todos";
import { initialState } from "../state";

const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { todos: [...state.todos, action.payload] };
    case REMOVE_TASK:
      return { todos: state.todos.splice(action.payload, 0) };
    default:
      return state;
  }
};

export default toDosReducer;
