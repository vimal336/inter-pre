import ImageGallery from "./Gallery";

const JavaScript = () => {
  const questionsAndAnswers = [
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
    }
];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
        Interview Questions & Answers
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

export default JavaScript;
