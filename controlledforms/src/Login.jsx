/** @format */

import { useState } from "react";

function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);


  function handleName(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault()
    onLogin({username, password, remember});
  }

  function checkRemember(event) {
    setRemember(event.target.checked);
  }

  return (
    <form name="myForm">
      <input type="text" onChange={handleName} value={username} />
      <input type="password" onChange={handlePassword} value={password} />
      <input type="checkbox" name="checkbox" onChange={checkRemember} />

      <button disabled={!username || !password} onClick={handleClick}>
        login
      </button>
    </form>
  );
}
export default Login;
