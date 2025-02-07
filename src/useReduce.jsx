import React, { useReducer } from "react";

const initialState = { count: 0 };

function Counter(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const UseReduce = () => {
  const [state, dispatch] = useReducer(Counter, initialState);

  const handleIncrement = () => dispatch({ type: 'increment' });
  const handleDecrement = () => dispatch({ type: 'decrement' });

  return (
    <div className="use-reduce-container">
      <p className="use-reduce-count">UseReducer Count: {state.count}</p>
      <div className="use-reduce-buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
