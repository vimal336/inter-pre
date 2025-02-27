import ImageGallery from "./Gallery";

const Interview = () => {
  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: (
        <>
          React is a JavaScript library for building user interfaces, developed
          by Facebook. It allows developers to create reusable UI components and
          manage application state efficiently.
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
          React hooks are functions that let you use state and lifecycle
          features in functional components. Examples include{" "}
          <code className="bg-gray-200 px-1 rounded">useState</code>,{" "}
          <code className="bg-gray-200 px-1 rounded">useEffect</code>, and{" "}
          <code className="bg-gray-200 px-1 rounded">useContext</code>.
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
      answer:
        "The React useState Hook allows us to track state in a function component.",
    },
    {
      question: "What is react controlled components",
      answer:
        "Controlled components are React components where the form data is handled by the state within the component. The form element’s value is controlled via the React state, making the form elements responsive to changes.",
    },
    {
      question: "What is React Router?",
      answer: (
        <>
          React Router is a standard library for routing in React. It enables
          navigation among views of various components in a React application,
          allows changing the browser URL, and keeps the UI in sync with the
          URL.
          <br />
          <br />
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">npm i react-router-dom</code>
          </pre>
        </>
      ),
    },
    {
      question: "What is a Source Map?",
      answer: (
        <>
          A source map is a file that maps the minified or transpiled JavaScript
          code (used in production) back to the original source code (written by
          the developer). It helps in debugging by allowing developers to see
          the original code in the browser's developer tools instead of the
          optimized/minified code.
          <br />
          <br />
        </>
      ),
    },
    {
      question: "What Is a Prop in React?",
      answer: (
        <>
          A prop [short for property] is used to pass any type of data from one
          component to another. Props are read-only, meaning components that
          receive them cannot modify them.
          <br />
          <br />
        </>
      ),
    },
    {
      question: "How Do You Handle Errors in React?",
      answer: (
        <>
          Using try-catch statements to catch errors within components. Using
          error boundaries, which are special components that can catch errors
          that occur in their child components. Using the componentDidCatch()
          lifecycle method to catch errors and display fallback UI. Using
          third-party libraries like Sentry or Bugsnag to monitor and report
          errors.
          <br />
          <br />
        </>
      ),
    },

    {
      question: "What is the difference between state and props?",
      answer: (
        <>
          Props are **read-only** data passed from parent to child components,
          whereas **state** is managed within the component and can change over
          time.
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
          When something changes (like a button click updating text), React
          updates the Virtual DOM first instead of directly changing the real
          page. React compares the old Virtual DOM with the new one to find the
          exact changes this process is called diffing. It updates only the
          changed parts in the real DOM instead of reloading the entire page.
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
      question: "why vite is faster than CRA - create react app",
      answer: (
        <>
          <p className="text-left">
            CRA - Uses Webpack, which bundles everything before serving it. This
            Vite - Uses native ES modules ESM, so the browser loads files on
            demand, making startup instant.
            <br /> Lightning-Fast Cold Starts No Bundling at Dev Time CRA:
            Webpack compiles the entire project before you can see the app.
            <br />
            Vite: Only compiles files when they are actually needed. Result: The
            app starts almost instantly, even in large{" "}
          </p>
        </>
      ),
    },
    {
      question: "Where to Use Custom Hooks in React? ",
      answer: (
        <>
          <p className="text-left">
          Custom hooks in React are used whenever you want to reuse logic across multiple components. 
          They help keep your code clean, modular, and reusable.
          </p>
        </>
      ),
    },
    {
      question: "What is Use Effect ?",
      answer: (
        <>
          <p className="text-left">
            useEffect hook in React is used to handle side effects in functional
            components. <br />
            Side effects include data fetching, subscriptions, DOM
            manipulations, and setting up timers.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">

              {`
Syntax:
useEffect(() => {
// Side effect code here
}, [dependencies]);
`}
            </code>
            <code className="whitespace-pre">
              {`
1. Run on Every Render (No Dependency Array)

import { useEffect } from "react";
function Example() {
  useEffect(() => {
    console.log("Component rendered!");
  });

  return <h1>Check the console</h1>;
}


`}
</code>
<code className="whitespace-pre">
              {`
2. Run Only on Mount (Empty Dependency Array [])

import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return <h1>Check the console</h1>;
}

`}
</code>
<code className="whitespace-pre">
              {`
3. Run When Dependencies Change
If you pass dependencies, the effect runs whenever any dependency changes.

import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(Count changed: ${"count"});
  }, [count]); // Runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

`}
</code>
          </pre>
        </>
      ),
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
    {
      question: "What is the difference between Shallow Copy vs. Deep Copy in JavaScript?",
      answer: (
        <>
         When copying objects or arrays in JavaScript, there are two types of copies: <br/>
Shallow Copy → Copies only the first level of properties; nested objects still reference the original. <br/>
Deep Copy → Creates a completely independent copy, including all nested objects and arrays.
          <br />
          <br />
          A shallow copy only duplicates the top-level properties. If the object has nested objects, they still reference the original.
Example of a Shallow Copy
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              { `const original = { name: "Vinoth", details: { age: 25 } };

// Creating a shallow copy using spread operator
const shallowCopy = { ...original };

// Modifying the nested object
shallowCopy.details.age = 30;

console.log(original.details.age); // 30 (also changed in the original)
console.log(shallowCopy.details.age); // 30
`}
            </code>
          </pre>
A deep copy duplicates all levels, so even nested objects get a new reference.
Example of a Deep Copy
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              { `const original = { name: "Vino", details: { age: 25 } };

// Creating a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the nested object
deepCopy.details.age = 30;

console.log(original.details.age); // 25 (original remains unchanged)
console.log(deepCopy.details.age); // 30

`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is usecontext hook?",
      answer: (
        <>
         In React, “context” refers to a mechanism that allows data to be shared across
          multiple components without explicitly passing it through props. It provides a way to pass data through
          the component tree without having to pass props down manually at every level. 
          <br />
          <br />
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`


import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{Hello dollar{user}!}</h1>
      <Component2 />
    </UserContext.Provider>
  );

  function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{Hello dollar{user} again!}</h2>
    </>
  );
}
}
              
              
              
              `}
            </code>
          </pre>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
       React Interview Questions & Answers
      </h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
      <ImageGallery/>
    </div>
  );
};

export default Interview;
