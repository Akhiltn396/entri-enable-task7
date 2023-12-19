import { React, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
};
  const reset = () => {
    setCount((prev) => prev = 0);

};
  return (
    <div className="counter">
      <div>
        <h1>Your Counter App</h1>

        <h2 style={{ textAlign: "center" }}>{count}</h2>
        <div className="button">
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={decrement}>Decrement</button>
          <button className="btn" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
