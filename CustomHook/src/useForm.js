/** @format */

import { useState } from "react";

const useForm = (initialValue) => {
const {inputs, setInputs} = useState(initialValue)

const handleChanges = (event) => {
  const name = event.target.value
  setInputs(...inputs, name)
}
return (inputs, handleChanges)
};

export default useForm

