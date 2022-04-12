const Counter = ({ number, setNumber }) => {
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <div className="my-3">
      <div className="btn-group">
        <button onClick={decrement} type="button" className="btn btn-info ">
          -
        </button>
        <button type="button" className="btn btn-primary">
          {number}
        </button>
        <button onClick={increment} type="button" className="btn btn-info ">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
