import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    if (counter === 0) return;
    dispatch(decrement());
  };

  return (
    <div className="my-3">
      <div className="btn-group">
        <button
          onClick={decrementCounter}
          type="button"
          className="btn btn-info "
        >
          -
        </button>
        <button type="button" className="btn btn-primary">
          {counter}
        </button>
        <button
          onClick={incrementCounter}
          type="button"
          className="btn btn-info "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
