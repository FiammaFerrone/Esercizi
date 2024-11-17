/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import ShowGithubUSer from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <>
      <h2>app</h2>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/welcome">go to welcome</Link> |{" "}
                <Link to="counter">go to counter</Link> |{" "}
                <Link to="/users">go to Github users</Link>
              </>
            }
          ></Route>
          <Route path=":name" element={<Welcome name="Fiamma" />} />
          <Route path="counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it </p>}></Route>
            <Route path="/users/:username" element={<ShowGithubUSer />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
