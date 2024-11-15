/** @format */

import { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [user, setUser] = useState({});

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error, "msg errore");
    }
  }

  useEffect(() =>{
    fetchData()
  },[username])


  
  return (
    <div>
      {user.name}
      {user.login}
      <img src={user.avatar}/>
    </div>
  );
};

export default GithubUser;
