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
    console.log(event);
    console.log(event.target.elements.username.value);
    
    
  }

  function checkRemember(event) {
    setRemember(event.target.checked);
  }

  return (
    <form name="myForm" onSubmit={handleClick}>
      <input type="text" onChange={handleName} value={username} name="username"/>
      <input type="password" onChange={handlePassword} value={password} />
      <input type="checkbox" name="checkbox" onChange={checkRemember} />

      <button type="submit" disabled={!username || !password}>
        login
      </button>
    </form>
  );
}
export default Login;
