/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";

function Counter({ initialValue = 0, changeValue = 1 }) {
  const [count, setCount] = useState(initialValue);
  function handleCounterIncr() {
    setCount(count + changeValue);
  }
  function handleCounterDim() {
    setCount(count - changeValue);
  }
  function reset() {
    setCount(initialValue);
  }

  return (
    <div>
      <Link to="/">return to home</Link>
      <h2>Count:{count}</h2>
      <button onClick={handleCounterIncr}>Aumento</button>
      <button onClick={handleCounterDim}>Diminuisco</button>
      <button onClick={reset}>reset</button>{" "}
    </div>
  );
}

export default Counter;
