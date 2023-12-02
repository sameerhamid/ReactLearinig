import React, { useRef, useState } from "react";

const LearnUseRef = () => {
  let localVal = 0;
  const refVal = useRef(0);
  const [myVal, setMyVal] = useState(0);

  console.log(localVal);
  console.log(refVal.current);
  console.log(myVal);
  return (
    <>
      <button onClick={() => localVal++}>upadate local variable</button>
      <button onClick={() => refVal.current++}>upadate ref</button>
      <button onClick={() => setMyVal((prevVal) => prevVal + 1)}>
        upadate state variable
      </button>

      <div>
        <div>Local Val :{localVal}</div>
        <div>ref Val :{refVal.current}</div>
        <div>state Val :{myVal}</div>
      </div>
    </>
  );
};

export default LearnUseRef;
