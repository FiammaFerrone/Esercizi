/** @format */

import { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleNavigate(username) {
    navigate(username);
  }
  async function fetchGithubUser() {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error, "msg errore");
    }
  }
  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
    <div>
      <Link to="/">go home</Link>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} onClick={() => handleNavigate(user.login)}>
              {user.login}
            </li>
          );
        })}
      </ul>
      <Outlet/>
    </div>
  );
};

export default GithubUserList;
