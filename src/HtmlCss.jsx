import ImageGallery from "./Gallery";

const HtmlCss = () => {
  const questionsAndAnswers = [
    {
      question: "Html Entities?",
      answer: (
        <>
        HTML Character Entities. Some characters are reserved in HTML. 
        If you use the less than symbol or greater than symbol
        signs in your HTML text, the browser might mix them with tags. 
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
          In HTML, tags represent the structural components of a document, such as h1 for headings. 
            Elements are formed by tags and encompass both the opening and closing tags along with the content.
            Attributes provide additional information or properties to elements,
            enhancing their functionality or appearance.
          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto max-w-full">
            <code className="whitespace-pre">
          
              {`

Tag: <p> (opening tag), </p> (closing tag)
Element: <p>This is a paragraph.</p>
`}
            </code>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231215170608/Group-3-2-(1).jpg" alt="" />
          </pre>
        </>
      ),
    },
    {
        question: "What is css boxmodel?",
        answer: (
          <>
        The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. 
        It is used to create the design and layout of web pages. 
            <br />
            <img src="https://i1.wp.com/onaircode.com/wp-content/uploads/2019/09/amazing-css-box-model.jpg?resize=1024%2C594&ssl=1"/>
            <br />
          </>
        ),
      },
      {
        question: "What is css gradient?",
        answer: (
          <>
       A CSS gradient is a smooth transition between two or more colors. CSS provides two main types of gradients 
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
         The tailwind.config.js file is the configuration file for Tailwind CSS. It allows you to customize Tailwind's default styles, extend the framework, and enable features like dark mode, theming, custom breakpoints, and plugins.

Purpose of tailwind.config.js
Customization - Modify default Tailwind settings like colors, spacing, fonts, and more.
Extend Tailwind - Add custom utility classes, animations, and variants.
Enable Dark Mode - Set up Tailwinds dark mode behavior.
Add Plugins - Integrate Tailwind plugins for additional features.
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
        Specificity in CSS
CSS specificity determines which styles are applied when multiple rules target the same element. It is calculated based on the types of selectors used in a rule.

Specificity Hierarchy

CSS assigns a weight to different types of selectors:

<br/>

Inline styles (style attribute) → 1000 <br/>
ID selectors (#id) → 100 <br/>
Class selectors, attributes, pseudo-classes (.class, [attr], :hover) → 10 <br/>
Element selectors and pseudo-elements (div, h1, ::before) → 1 <br/>
Universal selector (*) and inherited styles → 0 (lowest specificity) <br/>
            <br />
            <br />
          </>
        ),
      }
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
      <ImageGallery/>
    </div>
  );
};

export default HtmlCss;


