import React, { memo, useState } from "react";

const UseCallBackComp2 = memo(({ handleChange }) => {
  const [counter, setCounter] = useState(0);

  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // do nothing for 500ms to emulate extremely slow
  }
  const increment = () => {
    setCounter((prevVal) => prevVal + 1);
    handleChange?.();
  };

  return (
    <>
      <div>i am a super super slow component</div>
      <div>{counter}</div>
      <button onClick={increment}>Increment me</button>
    </>
  );
});

export default UseCallBackComp2;
