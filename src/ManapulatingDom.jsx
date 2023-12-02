import React, { useRef } from "react";

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
      <input type="text" ref={inputRef} />
      <button onClick={handleFocusOnInput}>Focus on input</button>
    </div>
  );
};

export default ManapulatingDom;
