import { useState } from "react";

const treeData = {
  "Variables": ["var", "let", "const"],
  "Data Types": ["String", "Number", "Boolean", "Object", "Array", "Null", "Undefined"],
  "Operators": ["Arithmetic", "Assignment", "Comparison", "Logical", "Unary", "Ternary (Conditional)"],
  "Control Flow": ["if statement", "else statement", "else if statement", "switch statement", "for loop", "while loop", "do-while loop"],
  "Functions": ["Function declaration", "Function expression", "Arrow function", "IIFE (Immediately Invoked Function Expression)"],
  "Scope": ["Global scope", "Local scope", "Block scope", "Lexical scope"],
  "Arrays": {
    "Array methods": ["push()", "pop()", "shift()", "unshift()", "splice()", "slice()", "concat()"],
    "Array iteration": ["forEach()", "map()", "filter()", "reduce()"]
  },
  "Objects": {
    "Object properties": ["Dot notation", "Bracket notation"],
    "Object methods": ["Object.keys()", "Object.values()", "Object.entries()"],
    "Object destructuring": []
  },
  "Promises": {
    "Promise states": ["Pending", "Fulfilled", "Rejected"],
    "Promise methods": ["then()", "catch()", "finally()", "Promise.all()"]
  },
  "Asynchronous JavaScript": ["Callbacks", "Promises", "Async/Await"],
  "Error Handling": ["try...catch statement", "throw statement"],
  "Modules": ["import", "export"],
  "DOM Manipulation": ["Selecting elements", "Modifying elements", "Creating elements"],
  "Events": ["Event listeners", "Event propagation", "Event delegation"],
  "AJAX": ["Asynchronous JavaScript and XML"],
  "Fetch API": [],
  "ES6+ Features": ["Template literals", "Destructuring assignment", "Spread/rest operator", "Arrow functions", "Classes", "let and const", "Default parameters", "Modules", "Promises"],
  "Web APIs": ["Local Storage", "Session Storage", "Web Storage API"],
  "Libraries and Frameworks": ["React", "Angular", "Vue.js"],
  "Debugging": ["Console.log()", "Breakpoints", "DevTools"],
  "Others": ["Closures", "Callbacks", "Prototypes", "this keyword", "Hoisting", "Strict mode"]
};

const TreeNode = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-4">
      <div
        className="cursor-pointer font-bold text-blue-500 hover:underline"
        onClick={() => setOpen(!open)}
      >
        {label}
      </div>
      {open && (
        <div className="ml-4 border-l border-gray-300 pl-2">
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div key={index} className="text-gray-700">
                - {child}
              </div>
            ))
          ) : (
            Object.keys(children).map((key, index) => (
              <TreeNode key={index} label={key} children={children[key]} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default function JavaScriptTree() {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">JavaScript Tree Structure</h2>
      {Object.keys(treeData).map((key, index) => (
        <TreeNode key={index} label={key} children={treeData[key]} />
      ))}
    </div>
  );
}