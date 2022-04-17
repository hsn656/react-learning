import { INCREMENT, DECREMENT } from "../actions/counter";
import { initialState } from "../state";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: ++state.counter };
    case DECREMENT:
      return { ...state, counter: --state.counter };
    default:
      return state;
  }
};

export default counterReducer;
