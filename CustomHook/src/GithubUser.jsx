/** @format */
import useGithubUser from "./useGithubUser";

const GithubUser = ({username}) => {
  const { user, loading, error, fetchData} = useGithubUser(username);

  return (
    <div>
      <button onClick={fetchData}>search utent</button>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      {user && (
        <div>
          <h2>{user.login}</h2>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
