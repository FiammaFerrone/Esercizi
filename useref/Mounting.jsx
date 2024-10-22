/** @format */
import { useEffect, useRef } from "react";

function Mounting() {
  const mountedRef = useRef(null);
  useEffect(() => {
    if (!mountedRef.current) {
      console.log("component was mounted for the first time");
      mountedRef.current = true;
    }
  }, []);
  return <div> Mounted Component</div>;
}
export default Mounting;
