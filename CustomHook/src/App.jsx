/** @format */

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./useCounter";
import GithubUser from "./GithubUser";
import useCurrentLocation from "./useCurrentLocation";
function App() {
  const { counter, handleIncrement, handleDecrement, handleReset } =
    useCounter();
    const position = useCurrentLocation();
  return (
    <>
      <div>
        <div>
          <GithubUser username={"FiammaFerrone"}/>
          <h2>counter:{counter}</h2>
          <button onClick={handleIncrement}>increment</button>
          <button onClick={handleDecrement}>decrement</button>
          <button onClick={handleReset}>reset</button>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
