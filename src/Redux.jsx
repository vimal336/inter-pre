const Redux = () => {
  const questionsAndAnswers = [
    {
      question: "Redux?",
      answer: (
        <div className="space-y-4 text-gray-800">
          <h2 className="text-2xl font-bold text-blue-600">Redux & Its Working</h2>
          
          <p>
            <strong>What is Redux?</strong><br />
            Redux is a <span className="text-blue-500 font-semibold">state management library</span> for JavaScript applications, mainly used with React. 
            It is an open-source library designed to <strong>manage and centralize application state</strong> in a predictable way using a 
            <span className="text-green-600 font-semibold"> single source of truth (store)</span>.
          </p>

          <h3 className="text-xl font-semibold text-gray-700">How Redux Works? (Step-by-Step)</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>📌 Store (Single Source of Truth):</strong>  
              <br />The global state of the application is stored in an object tree inside a **store**.
            </li>
            <li>
              <strong>⚡ Actions (Only Way to Update State):</strong>  
              <br />Actions are <span className="text-red-500 font-semibold">plain JavaScript objects</span> that describe what should change in the state. 
              They must have a `type` property and optionally a `payload` (data).
            </li>
            <li>
              <strong>🔁 Reducers (Pure Functions to Modify State):</strong>  
              <br />Reducers take the **current state** and an **action**, then return a **new state**. They must be **pure functions** 
              (no side effects, same input always gives the same output).
            </li>
            <li>
              <strong>🚀 Dispatch (Triggers Actions to Modify State):</strong>  
              <br />Dispatch sends an action to the reducer, which processes it and updates the store.
            </li>
            <li>
              <strong>📤 Selectors (Access State in Components):</strong>  
              <br />Components use <code className="bg-gray-200 p-1 rounded">useSelector()</code> (in React) to get state from the store 
              and <code className="bg-gray-200 p-1 rounded">useDispatch()</code> to send actions.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700">Key Redux Interview Questions</h3>
          <div className="border-l-4 border-blue-500 pl-4 space-y-2">
            <p><strong>1️⃣ What is Redux?</strong> Redux is a **state management library** that maintains a **single source of truth**.</p>
            <p><strong>2️⃣ Why use Redux?</strong> Useful when managing **complex global state** in large applications.</p>
            <p>
              <strong>3️⃣ Difference between Redux and Context API?</strong><br />
              <span className="text-green-600 font-semibold">Redux:</span> Best for **complex** state management, has actions, reducers, middleware.<br />
              <span className="text-purple-600 font-semibold">Context API:</span> Good for **lightweight** state sharing but lacks structured state updates.
            </p>
            <p><strong>4️⃣ What is Middleware in Redux?</strong> Middleware (like <span className="text-blue-500 font-semibold">Redux Thunk</span>) allows **async operations** in Redux.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700">🔹 Example of Redux in a React App</h3>
          <p>To use Redux, first install the required packages:</p>
          <div className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <pre>
              <code className="whitespace-pre-wrap text-blue-600">
                {`// Install Redux & React-Redux
npm install redux react-redux`}
              </code>
            </pre>
          </div>

          <p>Then, create the **store**:</p>
          <div className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <pre>
              <code className="whitespace-pre-wrap text-green-600">
                {`// store.js
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);
export default store;`}
              </code>
            </pre>
          </div>

          <p>Define the **reducer**:</p>
          <div className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <pre>
              <code className="whitespace-pre-wrap text-purple-600">
                {`// counterReducer.js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;`}
              </code>
            </pre>
          </div>

          <p>Now, use Redux in a **React component**:</p>
          <div className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <pre>
              <code className="whitespace-pre-wrap text-red-600">
                {`// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Counter;`}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-700">✨ Summary</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Redux is used for **predictable state management**.</li>
            <li>It follows **unidirectional data flow**.</li>
            <li>Uses **Store, Actions, Reducers, Dispatch, Selectors**.</li>
            <li>Works well with **large-scale applications**.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{qa.question}</h3>
          <div className="mt-2">{qa.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Redux;
