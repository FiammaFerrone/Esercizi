/** @format */
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createContext, useState } from "react";
import Hello from "./assets/Hello";


export const LanguageContext = createContext("ita");

function App() {
  const [count, setCount] = useState(0);
  
  const [language, setLanguage] = useState("ita");

  function handleSetLang(language) {
    setLanguage(language.target.value);
  }
  
  return (
    <>
    <LanguageContext.Provider value={language}>
      <Hello/>
      <select id="languageSelect" onChange={handleSetLang}>
        <option value="ita" onClick={() => handleSetLang("ita")}>Ita</option>
        <option value="eng" onClick={() => handleSetLang("eng")}>Eng</option>
      </select>
      </LanguageContext.Provider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
