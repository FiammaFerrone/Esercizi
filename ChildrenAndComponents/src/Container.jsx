/** @format */
import { useState } from "react";
import "./container.css";

const Container = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse((t) => !t)
  };
  return (
    <div className="container">
      <div>
        {title}
        <button onClick={handleCollapse}>toggle</button>
      </div>
     {collapse && <div>{children}</div>}
    </div>
  );
};

export default Container;
