import React, { useRef } from "react";
import Input from "./Input";

const ManapulatingDom = () => {
  const inputRef = useRef();
  const handleFocusOnInput = () => {
    console.log(inputRef.current.getBoundingClientRect());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleFocusOnInput}>Focus on input</button>
    </div>
  );
};

export default ManapulatingDom;
