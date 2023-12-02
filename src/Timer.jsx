import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter((prevVal) => prevVal + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  const stopTimer = () => {
    console.log("called");
    clearInterval(interval.current);
  };
  return (
    <div>
      <div>current time is :{counter}</div>
      <button onClick={stopTimer}>stop timer</button>
    </div>
  );
};

export default Timer;
