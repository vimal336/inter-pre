import { useMemo, useState } from "react";

export const UseMemoHook = () => {

  //const doubleNumber = slowFunction(number);

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // useMemo caches the squared value and only recomputes when `count` changes
  const squaredValue = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Squared: {squaredValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>
        Toggle {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
};



