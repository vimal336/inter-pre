const faqData = [
    {
      question: "What is useState?",
      answer: (
        <>
          <p>
            <code>useState</code> is a React Hook that allows you to add state to a functional component.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useState } from "react";
  
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
  };
  
  export default Counter;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useEffect?",
      answer: (
        <>
          <p>
            <code>useEffect</code> lets you perform side effects (like API calls, subscriptions, or timers) in a React component.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useState, useEffect } from "react";
  
  const Timer = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => setCount((prev) => prev + 1), 1000);
      return () => clearInterval(interval); // Cleanup function
    }, []);
  
    return <h2>Timer: {count} sec</h2>;
  };
  
  export default Timer;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useRef?",
      answer: (
        <>
          <p>
            <code>useRef</code> stores a reference to a DOM element or a value without causing re-renders.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useRef } from "react";
  
  const InputFocus = () => {
    const inputRef = useRef(null);
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    );
  };
  
  export default InputFocus;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useContext?",
      answer: (
        <>
          <p>
            <code>useContext</code> provides a way to share values between components without passing props manually.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { createContext, useContext } from "react";
  
  const ThemeContext = createContext("blue");
  
  const ChildComponent = () => {
    const theme = useContext(ThemeContext);
    return <h2 style={{ color: theme }}>Theme is applied!</h2>;
  };
  
  const App = () => (
    <ThemeContext.Provider value="red">
      <ChildComponent />
    </ThemeContext.Provider>
  );
  
  export default App;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useReducer?",
      answer: (
        <>
          <p>
            <code>useReducer</code> is similar to <code>useState</code> but is better for managing complex state logic.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useReducer } from "react";
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    return (
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    );
  };
  
  export default Counter;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useMemo?",
      answer: (
        <>
          <p>
            <code>useMemo</code> optimizes performance by memoizing expensive calculations.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useState, useMemo } from "react";
  
  const ExpensiveCalculation = ({ number }) => {
    const squaredNumber = useMemo(() => {
      console.log("Calculating...");
      return number * number;
    }, [number]);
  
    return <h2>Squared: {squaredNumber}</h2>;
  };
  
  const App = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <ExpensiveCalculation number={count} />
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  };
  
  export default App;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useCallback?",
      answer: (
        <>
          <p>
            <code>useCallback</code> optimizes functions by preventing them from being recreated unnecessarily.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useState, useCallback } from "react";
  
  const Button = React.memo(({ handleClick }) => {
    console.log("Button Rendered!");
    return <button onClick={handleClick}>Click Me</button>;
  });
  
  const App = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <Button handleClick={handleClick} />
      </div>
    );
  };
  
  export default App;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is useMemo?",
      answer: (
        <>
          <p>
            <code>useMemo</code> optimizes performance by memoizing expensive calculations.
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
  import React, { useState, useMemo } from "react";
  
  //with usememo
  const ExpensiveCalculation = ({ number }) => {
    const squaredNumber = useMemo(() => {
      console.log("Calculating...");
      return number * number;
    }, [number]);

  //without usememo
  const square = (() => {
    console.log("Calculating square...");
    return count * count;
  })();

  
    return <h2>Squared: {squaredNumber}</h2>;
  };
  
  const App = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <ExpensiveCalculation number={count} />
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  };
  
  export default App;
  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "UseState vs Useref?",
      answer: (
        <>
          <p>
            usestate vs useref
          </p>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
  {`
import React, { useState, useRef } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const currentRef = useRef(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleUse = () => {
    currentRef.current++;
    console.log("useRef value:", currentRef.current);
  };

  return (
    <>
      <h1>useRef</h1>
      <h1>{counter}</h1>
      <h1>{currentRef.current}</h1>
      <button onClick={handleUse}>useRef</button>
      <button onClick={handleAdd}>Counter</button>
    </>
  );
};

export default App;
  `}
            </code>
          </pre>
        </>
      ),
    },
  ];
  
  export default faqData;
  