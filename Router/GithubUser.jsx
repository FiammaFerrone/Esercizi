/** @format */

import { useEffect, useState} from "react";

const GithubUser = ({username}) => {
const [user, setUser] =   useState();
  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error(error, "msg errore");
    }
  }
  useEffect(() => {
    fetchData();
  }, [username]);

  return <div>{user.login}</div>;
};

export default GithubUser;
