/** @format */

import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUsers = () => {
  const [username, setUsername] = useState("");
  const [usernames, setUserNames] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "" && !usernames.includes(username)) {
      setUserNames([...usernames, username]);
      setUsername("");
    }
  };
  

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="write here"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {usernames.map((user) => {
        return <GithubUser key={user} username={user} />;
      })}

    </div>
  );
};

export default GithubUsers;
