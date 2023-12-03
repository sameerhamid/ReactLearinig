import React, { useCallback } from "react";
import UseCallBackComp2 from "./UseCallBackComp2";

const UseCallBackComp1 = ({ count }) => {
  const handleChange = useCallback(() => {
    console.log(count);
    console.log("hey he ha haa");
  }, [count]);
  return (
    <>
      <div>I am second parient</div>
      <UseCallBackComp2 handleChange={handleChange} />
    </>
  );
};

export default UseCallBackComp1;
