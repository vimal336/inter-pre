import React from "react";

const ChildCallback = React.memo(({ onIncrement }) => {
  console.log("Child component rendered!");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onIncrement}>Child Increment</button>
    </div>
  );
});

export default ChildCallback;
