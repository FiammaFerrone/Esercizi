/** @format */

import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const cssButton = {
    backgroundColor: password.length > 8 ? "green" : "red"
  }
  return (
    <form name="myForm">
      <input type="text" name="username" />
      <input type="password" onChange={handlePasswordChange} value={password} />
      <input type="checkbox" />
      <button type="submit" style={cssButton}>login</button>
    </form>
  );
};

export default Login;
