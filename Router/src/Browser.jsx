/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const Browser = () => {
  return (
    <div>
      <h2>app</h2>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Browser;
