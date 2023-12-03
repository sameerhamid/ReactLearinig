import { useState } from "react";
import "./App.css";
import LearnUseRef from "./LearnUseRef";
import ManapulatingDom from "./ManapulatingDom";
import Timer from "./Timer";
import UseCallBackComp1 from "./UseCallBackComp1";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    console.log("parient called count 1");
    setCount((prevCount) => prevCount + 1);
  };

  const increment2 = () => {
    console.log("parient called count 2");
    setCount2((prevCount) => prevCount + 1);
  };
  return (
    <>
      {/* <LearnUseRef /> */}

      {/* <Timer /> */}

      {/* <ManapulatingDom /> */}

      <div>Outer parient :{count}</div>
      <button onClick={increment}>Increment outer Parient</button>
      <div>Outer parient :{count2}</div>

      <button onClick={increment2}>Increment outer Parient</button>
      <UseCallBackComp1 count={count} />
    </>
  );
}

export default App;
