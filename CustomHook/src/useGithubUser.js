/* @format */

import { useEffect, useState } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      setUser(result);
      
    } catch (error) {
      setError(error, "msg errore");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [username]);
  return { user, loading, error, fetchData};
};

export default useGithubUser;
