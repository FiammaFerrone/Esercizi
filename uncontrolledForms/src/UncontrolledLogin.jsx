/** @format */


function UncontrolledLogin() {  
  function onLogin(event) {
    event.preventDefault()
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").value;
    console.log(username, password, remember);
  }

  return (
    <form onSubmit={onLogin}>
      <input name="username" placeholder="username" />
      <input name="password" type="password"/>
      <input name="remeber" type="checkbox" />
      <button type="submit">Login</button>
    </form>
  );
}
export default UncontrolledLogin;
