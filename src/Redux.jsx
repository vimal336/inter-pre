const Redux = () => {
  const questionsAndAnswers = [
    {
      question: "Redux?",
      answer: (
        <div className="prose max-w-full text-gray-700">
          <h3 className="text-xl font-bold">Redux & Its Working</h3>
          <p>
            <strong>What is Redux?</strong><br />
            Redux is a state management library for JavaScript applications, mainly used with React. It helps manage global state in a predictable way by using a single source of truth (store).
          </p>

          <h4 className="text-lg font-semibold mt-4">How Redux Works? (Step-by-Step)</h4>
          <ul className="list-disc pl-6">
            <li>
              <strong>Store (Single Source of Truth)</strong> - The global state of the application is stored in an object tree inside a store.
            </li>
            <li>
              <strong>Actions (Only Way to Update State)</strong> - Actions are plain JavaScript objects that describe what should change in the state.
            </li>
            <li>
              <strong>Reducers (Pure Functions to Modify State)</strong> - Reducers take the current state and an action, then return a new state.
            </li>
            <li>
              <strong>Dispatch (Triggers Actions to Modify State)</strong> - Dispatch sends an action to the reducer.
            </li>
            <li>
              <strong>Selectors (Access State in Components)</strong> - Components use <code>useSelector()</code> to get state from the store and <code>useDispatch()</code> to send actions.
            </li>
          </ul>
 <p className="text-left mt-4">What is Middleware in Redux? <br/>

Middleware (like Redux Thunk) allows async operations in Redux.</p>
          <h4 className="text-lg font-semibold mt-6">Example:</h4>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`
1. Install Redux & React-Redux

npm install redux react-redux
`}
            </code>
          </pre>

          <h4 className="text-lg font-semibold mt-6">Store Setup:</h4>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code className="whitespace-pre">
{`

2. Create a Redux Store

// store.js
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);
export default store;
`}
            </code>
          </pre>

          <h4 className="text-lg font-semibold mt-6">Reducer:</h4>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
            <code className="whitespace-pre">
{`
3. Create Reducer

// counterReducer.js
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

export default counterReducer;
`}

{`
4. Create Actions

// actions.js
export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

`}
{
`5. Provide Store to the React App

    // index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

    `
}

{`

6. Use Redux in a React Component

// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;

`}
            </code>
          </pre>
        </div>
      ),
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6 sm:p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Redux Interview Questions & Answers
      </h2>

      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2 hover:bg-gray-50 p-4 rounded-md transition">
            <h3 className="text-lg font-semibold text-blue-700">{item.question}</h3>
            <div>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Redux;
