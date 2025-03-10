import ImageGallery from "./Gallery";
import ProblemSolving from "./ProblemSolving";

const Javascript = () => {
  const questionsAndAnswers = [
    {
      question: "What are JavaScript Events?",
      answer: (
        <>
          <p>
            JavaScript Events are actions that happen due to user interactions 
            through the browser, using input fields, buttons, or other interactive 
            elements present in the web page.
          </p>

          <p>
            Events help create dynamic and interactive web pages. JavaScript provides 
            event listeners to handle these events efficiently.
          </p>

          <h3 className="font-semibold mt-4">Types of Events in JavaScript</h3>

          <h4 className="font-semibold mt-2">1. Mouse Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>click</strong> – When an element is clicked.</li>
            <li><strong>dblclick</strong> – When an element is double-clicked.</li>
            <li><strong>mousedown</strong> – When a mouse button is pressed.</li>
            <li><strong>mouseup</strong> – When a mouse button is released.</li>
            <li><strong>mousemove</strong> – When the mouse is moved over an element.</li>
            <li><strong>mouseover</strong> – When the mouse enters an element.</li>
            <li><strong>mouseout</strong> – When the mouse leaves an element.</li>
          </ul>

          <h4 className="font-semibold mt-2">2. Keyboard Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>keydown</strong> – When a key is pressed.</li>
            <li><strong>keyup</strong> – When a key is released.</li>
            <li><strong>keypress</strong> (deprecated) – When a key is pressed.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Form Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>submit</strong> – When a form is submitted.</li>
            <li><strong>change</strong> – When the value of an input/select changes.</li>
            <li><strong>input</strong> – When the user inputs text.</li>
            <li><strong>focus</strong> – When an element gains focus.</li>
            <li><strong>blur</strong> – When an element loses focus.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Window/Document Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>load</strong> – When the document or an image is fully loaded.</li>
            <li><strong>DOMContentLoaded</strong> – When the HTML is fully loaded and parsed.</li>
            <li><strong>resize</strong> – When the window is resized.</li>
            <li><strong>scroll</strong> – When the user scrolls.</li>
            <li><strong>unload</strong> – When the page is about to be closed.</li>
          </ul>

          <h4 className="font-semibold mt-2">5. Clipboard Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>copy</strong> – When content is copied.</li>
            <li><strong>cut</strong> – When content is cut.</li>
            <li><strong>paste</strong> – When content is pasted.</li>
          </ul>

          <h4 className="font-semibold mt-2">6. Drag and Drop Events</h4>
          <ul className="list-disc pl-6">
            <li><strong>dragstart</strong> – When dragging starts.</li>
            <li><strong>drag</strong> – When an element is being dragged.</li>
            <li><strong>dragend</strong> – When dragging ends.</li>
            <li><strong>drop</strong> – When an element is dropped.</li>
          </ul>

          <h4 className="font-semibold mt-2">7. Touch Events (for mobile devices)</h4>
          <ul className="list-disc pl-6">
            <li><strong>touchstart</strong> – When a touch event starts.</li>
            <li><strong>touchmove</strong> – When a finger moves on the screen.</li>
            <li><strong>touchend</strong> – When a touch ends.</li>
          </ul>

          <h3 className="font-semibold mt-4">Example: Click Event</h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`
const btn = document.getElementById("btn");
btn.onclick = function() {
    alert("Button clicked!");
};
              `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What pure and impure functions?",
      answer: (
        <>
         Pure functions have no side effects and always return the 
         same output for a given input, while impure functions 
         can have side effects and produce different outputs for the same input.
          <br />
          <br />
          Example of a simple React component:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
                
              {`
              Pure Function
              function add(a, b) { 
	return a + b; 
} 

console.log(add(3, 4));
;
};
impure function
let oldValue = 7; 

function add(newValue) { 
	return oldValue += newValue; 
} 

console.log(add(5));


`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "What is the DOM (Document Object Model)?",
      answer: (
        <>
          The **DOM (Document Object Model)** represents the structure of an HTML or XML document as a tree.
          JavaScript can interact with the DOM to manipulate content, structure, and styles dynamically.
          <br />
          <br />
          **Key Features of DOM:**
          <ul className="list-disc ml-5">
            <li>Represents the HTML structure as a tree of nodes.</li>
            <li>Allows manipulation of HTML elements, attributes, and styles.</li>
            <li>Enables event handling on web pages.</li>
            <li>Standardized by **W3C**.</li>
          </ul>
          <br />
          **Example: Manipulating an Element**
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
document.getElementById("demo").innerText = "Hello, DOM!";
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "What is the BOM (Browser Object Model)?",
      answer: (
        <>
          The **BOM (Browser Object Model)** allows JavaScript to interact with the **browser window** rather than the document itself.
          It provides objects like `window`, `navigator`, `location`, `history`, and `screen`.
          <br />
          <br />
          **Key Features of BOM:**
          <ul className="list-disc ml-5">
            <li>Handles interactions with the browser itself.</li>
            <li>Includes `window`, `navigator`, `location`, `history`, `screen`.</li>
            <li>Not standardized by **W3C**, but widely supported in browsers.</li>
          </ul>
          <br />
          **Example: Open a New Window**
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
window.open("https://google.com", "_blank");
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "DOM vs BOM - Key Differences",
      answer: (
        <>
          <div className="overflow-x-auto w-full mt-2">
            <table className="min-w-max border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Feature</th>
                  <th className="border border-gray-300 p-2">DOM</th>
                  <th className="border border-gray-300 p-2">BOM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Definition</td>
                  <td className="border border-gray-300 p-2">
                    Represents the structure of a webpage
                  </td>
                  <td className="border border-gray-300 p-2">
                    Represents the browser environment
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Focus</td>
                  <td className="border border-gray-300 p-2">
                    Manipulating HTML elements
                  </td>
                  <td className="border border-gray-300 p-2">
                    Interacting with the browser
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Standardization</td>
                  <td className="border border-gray-300 p-2">Standardized by W3C</td>
                  <td className="border border-gray-300 p-2">Not standardized</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Main Object</td>
                  <td className="border border-gray-300 p-2">`document`</td>
                  <td className="border border-gray-300 p-2">`window`</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Examples</td>
                  <td className="border border-gray-300 p-2">
                    `getElementById()`, `innerHTML`, `addEventListener()`
                  </td>
                  <td className="border border-gray-300 p-2">
                    `alert()`, `location.href`, `navigator.userAgent`
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },    
    {
      question: "1. Function Declaration (Named Function)",
      answer: (
        <>
          A **Function Declaration** is a named function that can be called before its definition (due to hoisting).
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
function greet() {
    return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "2. Function Expression",
      answer: (
        <>
          A **Function Expression** defines a function and assigns it to a variable. It is **not hoisted**.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
const greet = function() {
    return "Hello, World!";
};
console.log(greet()); // Output: Hello, World!
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "3. Arrow Function (ES6)",
      answer: (
        <>
          **Arrow Functions** provide a more concise syntax and do not bind their own `this`.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "4. Immediately Invoked Function Expression (IIFE)",
      answer: (
        <>
          An **IIFE** runs immediately after its definition and is often used to avoid polluting the global scope.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
(function() {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "5.Higher-Order Function",
      answer: (
        <>
          A **Higher-Order Function** takes another function as an argument or returns a function.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`
function operate(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
console.log(operate(5, 3, add)); // Output: 8
`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "Spread abd Rest operator?",
      answer: (
        <>
       The spread operator is used to expand an iterable (array, object, or string) into individual elements. 
       It is commonly used for copying, merging, and passing values as function arguments. <br/>
       The rest operator is used to collect multiple values into a single variable, usually in function parameters or destructuring assignments. 
       It allows handling an indefinite number of arguments as an array or object.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <img src="https://i.redd.it/erej5eai49o91.jpg" alt="" />
            <code className="whitespace-pre">{`

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a shallow copy
console.log(arr2); // [1, 2, 3]

//rest operator
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); //10

`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "Event Bubbling vs delegation?",
      answer: (
        <>
      Event Bubbling is When an event occurs on an element, 
      it starts from the target element and bubbles up through its ancestors. <br/>
      Example: If you click a button inside a div, the event first triggers on the button and then propagates up to the div and beyond <br/>

      Event Delegation Uses event bubbling to handle events efficiently by attaching a single event listener to a parent element instead of multiple child elements.
      Useful for dynamically added elements.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`

 //Event Bubbling
 document.getElementById("parent").addEventListener("click", function () {
    alert("Parent Div Clicked!");
});
           
//Event Deligation
document.getElementById("parent").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        alert("Button Clicked!");
    }
});


`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "Event Bubbling vs delegation?",
      answer: (
        <>
      The addEventListener() method attaches an event handler to the specified element.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">{`

 const menu = document.querySelector('.menu');

const menuList = document.querySelector('nav ul');

menu.addEventListener('click', ()=>{
  menuList.classList.toggle('showmenu')
})

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NavBar</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <nav>
        <div class="logo">
            <a href="">MATRIX</a>
        </div>
       <ul>
        <li><a href="Home">HOME</a></li>
        <li><a href="works">WORKS</a></li>
        <li><a href="service">SERVICE</a></li>
        <li><a href="contact">CONTACT</a></li>
       </ul>

       <div class="menu">
         <div class="menu-line"></div>
         <div class="menu-line"></div>
         <div class="menu-line"></div>
       </div>
    </nav>

    <section>
      <div>
        <h1>Javascript Navigation Bar</h1>
      </div>
     
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorem ad quis labore sed ipsam soluta
           dolore velit repudiandae facilis similique.</p>
      </div>
    </section>

    <script src="js/script.js"></script>
  </body>
</html>


`}</code>
          </pre>
        </>
      ),
    },
    {
      question: "Framework vs library difference",
      answer: (
        <>
<p className="text-left">Both frameworks and libraries help developers build applications, 
        but they have key differences in how they are used and how much control they give developers.</p>
        <p className="text-left">A library is a collection of reusable functions/modules that help perform specific tasks.
        You call the library's functions when needed in your code.</p>
        <p className="text-left"> A framework provides a complete structure and dictates how your application should be built.
It calls your code, not the other way around (Inversion of Control).</p>
        <img src="https://miro.medium.com/max/1602/1*u9zaeCkef5gt4Id72AiP_w.png" alt=""/>
        </>
      ),
    },
    {
      question: "Execution Method vs Test Method in JavaScript ?",
      answer: (
        <>
<p className="text-left"><b>Execution Method :</b>
An execution method is any function that performs a task, operation, or computation in JavaScript. 
These methods are meant to be executed as part of the application normal flow.</p>
        <p className="text-left"><b>Test Method: </b> A test method is a function used to verify the correctness of another function or module. 
          It is typically used in unit testing frameworks like Jest, Mocha, or Jasmine.</p>
        </>
      ),
    },
    {
      question: "Why javascript single threaded language?",
      answer: (
        <>
        javascript is single threaded because it can handle only one task at a time.
        JavaScript is single-threaded because 
        it was originally designed for web browsers to handle user interactions efficiently. <br/>

        2. Event Loop Mechanism (How JavaScript Manages Concurrency)
Even though JavaScript is single-threaded, it can handle multiple tasks asynchronously using:<br/>

Callback queue <br/>
Promises & Microtasks<br/>
Web APIs (setTimeout, fetch, DOM events, etc.)
        </>
      )
    },
    {
      question: "Javascript Axios vs fetch?",
      answer: (
        <>
       Both Axios and the Fetch API are used for making HTTP requests in JavaScript, 
       but Axios is often preferred because it provides more built-in features and better error handling<br/>

       Axios: Automatically Parses JSON <br/>
       Better Error Handling<br/>

       Simpler Syntax for Requests
       ✅ Axios: Short and Clean

Callback queue <br/>
Promises & Microtasks<br/>
Web APIs (setTimeout, fetch, DOM events, etc.)
        </>
      )
    },
];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
        Javascript Interview Questions & Answers
      </h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
      <ProblemSolving/>
      <ImageGallery/>
    </div>
  );
};

export default Javascript;


