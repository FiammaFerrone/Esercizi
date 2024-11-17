/** @format */

import GithubUser from "../GithubUser";
import { useParams } from "react-router-dom";

const ShowGithubUSer = () => {
  const {username} = useParams();
  return (
    <>
    <GithubUser username={username}/>
    </>
  );
};

export default ShowGithubUSer;
