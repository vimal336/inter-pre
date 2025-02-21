// import React, { useState, useCallback } from 'react';

// const  UseCb = () =>{
  
//   const [count, setCount] = useState(0);

//   // Memoize the increment function to prevent it from being recreated on every render
//   const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []); // Dependencies array

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default UseCb;

import { useState, useRef } from "react"

 const UseCb = () =>{

  const [add, setAdd] = useState([]);
  const [input, setInput] = useState([]);

  let focusref = useRef(null);

  const addTodo = () => {
    setAdd((t)=>[...t, input]);
    setInput("");
    focusref.current.focus();
  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Input and Button */}
      <div className="flex gap-2 w-full max-w-md">
        <input
          className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          ref={focusref}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>

      {/* List of Tasks */}
      <ul className="mt-6 w-full max-w-md bg-white shadow-md rounded-md p-4">
        {add.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks added</li>
        ) : (
          add.map((val, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-blue-100 p-3 rounded-md mb-2 shadow-sm"
            >
              <span className="font-medium text-gray-700">{i + 1}. {val}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UseCb;