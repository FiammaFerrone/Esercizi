/** @format */

import { useEffect } from "react";
import { useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }       
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" /> i'm the input
    </div>
  );
}
export default FocusableInput;
