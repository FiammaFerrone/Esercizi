/** @format */
import { useState } from "react";

const TodoList = ({ todos }) => {
  const [todo, setTodo] = useState(todos);
  const [inputValue, setInputValue] = useState("");

  const updatedArray = () => {
    if (inputValue !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const remove = (todoToRemove) => {
    setTodo(todo.filter((t) => t !== todoToRemove));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write here"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={updatedArray}>Click me</button>
      <ul>
        {todo.map((t, index) => {
          return (
            <li key={index}>
              {t}

              <button onClick={()=> remove(t)}> delete </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setTodo([])
        }}> reset </button>
    </div>
  );
};

export default TodoList;
