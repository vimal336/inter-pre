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
          The **Virtual DOM** is a lightweight JavaScript representation of the actual DOM. React updates the Virtual DOM first and then efficiently updates the real DOM based on changes, improving performance.
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
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">Interview Questions & Answers</h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 grid gap-4 md:grid-cols-3 md:items-start">
            <h3 className="text-lg font-semibold md:col-span-1">{item.question}</h3>
            <div className="text-gray-700 md:col-span-2">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interview;
