/** @format */

import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + 1)
  }

  function handleDecrement() {
    setCounter((c) => c - 1)
  }

  function handleReset() {
    setCounter(initialValue)
  }

  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset
  }
  
};

export default useCounter
