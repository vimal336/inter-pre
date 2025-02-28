const ProblemSolving = () => {
  const questionsAndAnswers = [
    {
      question: "Given an array [2,2,3,2,4,5,5] return an object that counts the occurrences of the each element ?",
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
    </div>
  );
};

export default ProblemSolving;


