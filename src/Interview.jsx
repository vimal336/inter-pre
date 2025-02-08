const Interview = () => {
  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: (
        <>
          React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage application state efficiently.
          <br />
          <br />
          Example of a simple React component:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`const Hello = () => {
  return <h1>Hello, World!</h1>;
};`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What are React hooks?",
      answer: (
        <>
          React hooks are functions that let you use state and lifecycle features in functional components. Examples include <code className="bg-gray-200 px-1 rounded">useState</code>, <code className="bg-gray-200 px-1 rounded">useEffect</code>, and <code className="bg-gray-200 px-1 rounded">useContext</code>.
          <br />
          <br />
          Example of <code>useState</code>:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useState?",
      answer: (
        "The React useState Hook allows us to track state in a function component."
      ),
    },
    {
      question: "What is React Router?",
      answer: (
        <>
          React Router is a standard library for routing in React. It enables navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.
          <br />
          <br />
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">npm i react-router-dom</code>
          </pre>
        </>
      ),
    },
    {
      question: "What is the difference between state and props?",
      answer: (
        <>
          Props are **read-only** data passed from parent to child components, whereas **state** is managed within the component and can change over time.
          <br />
          <br />
          **Example of Props & State:**
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`const ChildComponent = ({ message }) => {
  return <h1>{message}</h1>;
};

const ParentComponent = () => {
  return <ChildComponent message="Hello from Parent!" />;
};`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is the Virtual DOM?",
      answer: (
        <>
         React creates a Virtual DOM (a lightweight copy of the actual DOM).
When something changes (like a button click updating text), React updates the Virtual DOM first instead of directly changing the real page.
React compares the old Virtual DOM with the new one to find the exact changes this process is called diffing.
It updates only the changed parts in the real DOM instead of reloading the entire page.
          <br />
          <br />
          **How React updates the Virtual DOM:**
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
            </code>
          </pre>
        </>
      ),
    },
    {
    question :"why vite is faster than CRA - create react app",
    answer:(
      <>
      Uses Native ES Modules Instead of Bundling
CRA - Uses Webpack, which bundles everything before serving it. This makes startup slow.
Vite - Uses native ES modules ESM, so the browser loads files on demand, making startup instant.
2. Lightning-Fast Cold Starts No Bundling at Dev Time
CRA: Webpack compiles the entire project before you can see the app.
Vite: Only compiles files when they are actually needed.
Result: The app starts almost instantly, even in large 
</>
    )
    },
    {
      question: "usestate with condtional operator (ternary)",
      answer: (
        <>
          <br />
          **Example code:**
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
{`import React, { useState }  from 'react';
const App = () =>{
     const [number, setNumber] = useState(1)
   const inc = ( ) => {
       setNumber(number + 1)
   }
      const dec = ( ) => {
       setNumber(number - 1)
   }
    return(
        <div>
            <h1 style ={{ backgroundColor: number < 0 ? 'red' : 'green' }}>Hello</h1>
            <p>{number}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}
export default App;`}
            </code>
          </pre>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">Interview Questions & Answers</h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interview;