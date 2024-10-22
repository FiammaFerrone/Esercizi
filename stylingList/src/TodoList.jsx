/** @format */

import { useState } from "react";

const TodoList = ({ todos }) => {
  const [todo, setTodo] = useState(todos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    {
      setInputValue(event.target.value);
    }
  };

  const updatedArray = () => {
    if (inputValue !== "") {
      setTodo([...todo, inputValue]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write here"
        value={inputValue}
        onChange={handleInput}
      />
      <button onClick={updatedArray}>Click me</button>
      <ul>
        {names.map((name) => {
          <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
