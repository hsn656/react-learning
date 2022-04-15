import { INCREMENT, DECREMENT } from "../actions/counter";
import { initialState } from "../index";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: ++state.counter };
    case DECREMENT:
      return { counter: --state.counter };
    default:
      return state;
  }
};

export default counterReducer;
