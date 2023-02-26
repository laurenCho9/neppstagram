import { useState } from "react";

export function useInput(initialValue) {
  const [inputs, setInputs] = useState(initialValue);

  const handleInputs = (e) => {
    // setInputs(e.target.value);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return [inputs, handleInputs];
}
