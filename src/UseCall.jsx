import { useState, useCallback } from "react";
import ChildCallback from "./ChildCallback";

const ParentWithCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoized function using useCallback
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Parent With useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      {/* Child receives the same function reference each time */}
      <ChildCallback onIncrement={handleIncrement} />
    </div>
  );
};

export default ParentWithCallback;
