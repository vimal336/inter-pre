import ImageGallery from "./Gallery";
import BootstrapClasses from "./Bootstrap";

const HtmlCss = () => {
  const questionsAndAnswers = [
    {
      question: "Html Entities?",
      answer: (
        <>
          HTML Character Entities. Some characters are reserved in HTML. If you
          use the less than symbol or greater than symbol signs in your HTML
          text, the browser might mix them with tags.
          <br />
          <br />
          Example:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`
              < (less than)	&lt;
             > (greater than) &gt;
`}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "Tag vs elemnts?",
      answer: (
        <>
          In HTML, tags represent the structural components of a document, such
          as h1 for headings. Elements are formed by tags and encompass both the
          opening and closing tags along with the content. Attributes provide
          additional information or properties to elements, enhancing their
          functionality or appearance.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`

Tag: <p> (opening tag), </p> (closing tag)
Element: <p>This is a paragraph.</p>
`}
            </code>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20231215170608/Group-3-2-(1).jpg"
              alt=""
            />
          </pre>
        </>
      ),
    },
    {
      question: "Select Tag vs DataList Tag?",
      answer: (
        <>
          Both select and datalist elements in HTML provide ways to offer users predefined options, 
            but they have different use cases and behaviors. Here’s a comparison: <br/>

           Select Tag Used to create a dropdown list.  
Only allows one option to be selected. <br/>

dataList Tag sed to provide autocomplete suggestions for an input field.
Allows both predefined options and custom input.

          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`

<label for="cars">Choose a car:</label>
<select id="cars">
  <option value="bmw">BMW</option>
  <option value="audi">Audi</option>
  <option value="tesla">Tesla</option>
</select>


<label for="cars">Choose or enter a car:</label>
<input list="car-list" id="cars" name="cars">
<datalist id="car-list">
  <option value="BMW">
  <option value="Audi">
  <option value="Tesla">
</datalist>

`}
            </code>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20231215170608/Group-3-2-(1).jpg"
              alt=""
            />
          </pre>
        </>
      ),
    },
    {
      question: "What is css boxmodel?",
      answer: (
        <>
          The CSS box model is a container that contains multiple properties
          including borders, margin, padding, and the content itself. It is used
          to create the design and layout of web pages.
          <br />
          <img src="https://i1.wp.com/onaircode.com/wp-content/uploads/2019/09/amazing-css-box-model.jpg?resize=1024%2C594&ssl=1" />
          <br />
        </>
      ),
    },
    {
      question: "CSS Selectors?",
      answer: (
        <>
          <ul>
            <li><b>Element:</b> <code>div {'{'} color: red; {'}'}</code></li>
            <li><b>ID:</b> <code>#myId {'{'} font-size: 20px; {'}'}</code></li>
            <li><b>Class:</b> <code>.myClass {'{'} background: blue; {'}'}</code></li>
            <li><b>Universal:</b> <code>* {'{'} margin: 0; {'}'}</code></li>
            <li><b>Attribute:</b> <code>[type="text"] {'{'} border: 1px solid; {'}'}</code></li>
            <li><b>Child:</b> <code>div &gt; p {'{'} color: green; {'}'}</code></li>
            <li><b>Descendant:</b> <code>div p {'{'} font-weight: bold; {'}'}</code></li>
            <li><b>Adjacent Sibling:</b> <code>h1 + p {'{'} font-style: italic; {'}'}</code></li>
            <li><b>General Sibling:</b> <code>h1 ~ p {'{'} color: gray; {'}'}</code></li>
            <li><b>Pseudo-class:</b> <code>a:hover {'{'} color: orange; {'}'}</code></li>
            <li><b>Pseudo-element:</b> <code>p::first-letter {'{'} font-size: 30px; {'}'}</code></li>
          </ul>
        </>
      ),
    },
    
    {
      question: "CSS Position?",
      answer: (
        <>
          <ul>
            <li><b>Static:</b> <code>position: static;</code> (Default, normal flow)</li>
            <li><b>Relative:</b> <code>position: relative;</code> (Moves relative to itself)</li>
            <li><b>Absolute:</b> <code>position: absolute;</code> (Relative to nearest positioned ancestor)</li>
            <li><b>Fixed:</b> <code>position: fixed;</code> (Relative to viewport, stays on scroll)</li>
            <li><b>Sticky:</b> <code>position: sticky;</code> (Switches between relative & fixed)</li>
          </ul>
        </>
      ),
    },
    
    {
      question: "css?",
      answer: (
        <>
 <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`
@import url("https://fonts.googleapis.com/css2?family=Inspiration&family=Poppins:wght@500&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto&family=Source+Sans+Pro&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

body{
  background-image: url("../image/img2.jpg");
  background-size: cover;
  height: 2000px;
 
 
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(18, 2, 75);
  width: 100%;
}

nav li {
  display: inline-block;
  list-style-type: none;
  margin: 0 8px;
}

.menu-line {
  height: 2px;
  width: 20px;
  background-color: blueviolet;
  margin-bottom: 3px;
  transition: all 2.1s ease;
}

.menu {
  cursor: pointer;
  display: none;
}

@media (max-width: 900px) {
  nav {
    flex-direction: column;
  }
  nav li {
    display: block;
  }
  ul {
    text-align: center;
  }
  .logo {
    align-self: flex-start;
  }

  .menu {
    display: block;
    position: absolute;
    top: 5px;
    right: 10px;
  }

  ul {
    display: none;
  }

  .showmenu {
    display: block;
  }
}

section h1{
  display: flex;
  align-items: center;
  justify-content: center;
}

section p{
  text-align:center;
}


@media (max-width: 900px){
  
}
  `}
            </code>
          </pre>
        </>
      ),
    },

    {
      question: "Crud",
      answer: (
        <>
 <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`
delete and edit functionality

import { useState, useRef } from "react";

const Crud = () => {
  const [tasks, setTasks] = useState([]); // Holds list of tasks
  const [input, setInput] = useState(""); // Holds current input value
  const [editingIndex, setEditingIndex] = useState(null); // Tracks which task is being edited

  let focusRef = useRef(null);

  // Function to add or update a task
  const handleAddOrUpdate = () => {
    if (input.trim() === "") return; // Prevent adding empty tasks

    if (editingIndex !== null) {
      // Update task if editing
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = input;
      setTasks(updatedTasks);
      setEditingIndex(null); // Reset editing state
    } else {
      // Add new task
      setTasks((prevTasks) => [...prevTasks, input]);
    }

    setInput(""); // Clear input field
    focusRef.current.focus(); // Focus input field
  };

  // Function to delete a task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to edit a task
  const handleEdit = (index) => {
    setInput(tasks[index]); // Set input field with task text
    setEditingIndex(index); // Set task index for editing
    focusRef.current.focus(); // Focus input field
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Input and Button */}
      <div className="flex gap-2 w-full max-w-md">
        <input
          className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          ref={focusRef}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          className={px-4 py-2 rounded-md shadow-md transition { "editingIndex" !== "null" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
          } text-white}
          onClick={handleAddOrUpdate}
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* List of Tasks */}
      <ul className="mt-6 w-full max-w-md bg-white shadow-md rounded-md p-4">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks added</li>
        ) : (
          tasks.map((task, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-blue-100 p-3 rounded-md mb-2 shadow-sm"
            >
              <span className="font-medium text-gray-700">{i + 1}. {task}</span>
              <div className="flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-yellow-600 transition"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 transition"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Crud;

  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "tags in block vs inline elements",
      answer: (
        <>
          The CSS box model is a container that contains multiple properties
          including borders, margin, padding, and the content itself. It is used
          to create the design and layout of web pages.
          <br />
          <img src="https://dotnettutorials.net/wp-content/uploads/2021/11/word-image-453.png" />
          <img src="http://4.bp.blogspot.com/-TiwOixlooJk/U4UyEnv_XpI/AAAAAAAACFs/NuuLz2IvoZ4/s1600/css-display-block-vs-inline-block.png" alt="" />
          <img src="https://samanthaming.gumlet.io/pictorials/css-inline-vs-inlineblock-vs-block-5.jpg.gz?format=auto" alt=""/>
          <br />
        </>
      ),
    },
    {
      question: "What is Cascading in CSS?",
      answer: (
        <>
         The term Cascading in Cascading Style Sheets (CSS) refers to the way styles are
          applied to elements when there are multiple conflicting rules.
          It determines which CSS rule takes precedence based on three key factors:
        </>
      ),
    },
    {
      question: "Imperative vs. Declarative Programming in JavaScript?",
      answer: (
        <>
        <b>Imperative:</b>When you need full control over execution (low-level optimizations, game loops, etc.). <br/>
        <b>Declarative:</b>When you want clean, maintainable, and scalable code (React, Redux, SQL, functional programming).
        </>
      ),
    },
    {
      question: "What is css gradient?",
      answer: (
        <>
          A CSS gradient is a smooth transition between two or more colors. CSS
          provides two main types of gradients
          <br />
          background: linear-gradient(direction, color1, color2, ...);
          <br />
        </>
      ),
    },
    {
      question: "Tailwind config.js file use?",
      answer: (
        <>
          The tailwind.config.js file is the configuration file for Tailwind
          CSS. It allows you to customize Tailwind's default styles, extend the
          framework, and enable features like dark mode, theming, custom
          breakpoints, and plugins. Purpose of tailwind.config.js Customization
          - Modify default Tailwind settings like colors, spacing, fonts, and
          more. Extend Tailwind - Add custom utility classes, animations, and
          variants. Enable Dark Mode - Set up Tailwinds dark mode behavior. Add
          Plugins - Integrate Tailwind plugins for additional features.
          <br />
          <br />
          Example:
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
              {`
               /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Paths to scan for Tailwind classes
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#F59E0B", // Custom secondary color
      },
      spacing: {
        '128': '32rem', // Custom spacing value
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
      },
    },
  },
  darkMode: "class", // Enables dark mode using a "class" strategy
  plugins: [],
};

  `}
            </code>
          </pre>
        </>
      ),
    },
    {
      question: "Specificity in CSS?",
      answer: (
        <>
          Specificity in CSS CSS specificity determines which styles are applied
          when multiple rules target the same element. It is calculated based on
          the types of selectors used in a rule. Specificity Hierarchy CSS
          assigns a weight to different types of selectors:
          <br />
          Inline styles (style attribute) → 1000 <br />
          ID selectors (#id) → 100 <br />
          Class selectors, attributes, pseudo-classes (.class, [attr], :hover) →
          10 <br />
          Element selectors and pseudo-elements (div, h1, ::before) → 1 <br />
          Universal selector (*) and inherited styles → 0 (lowest specificity){" "}
          <br />
          <br />
          <br />
        </>
      ),
    },
  ];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
        Html and CSS Interview Questions & Answers
      </h2>
      <div className="space-y-6">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="border-b pb-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="text-gray-700">{item.answer}</div>
          </div>
        ))}
      </div>
      <ImageGallery />
      <BootstrapClasses/>
    </div>
  );
};

export default HtmlCss;
