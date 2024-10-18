/** @format */

import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // console.log(time.toLocaleTimeString());
    
    return () => {
        clearInterval(timer);
    }
  }, [time]);
  return (
    <div>
      <h2> Current time : {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
