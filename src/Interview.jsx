const Interview = () => {
    const questionsAndAnswers = [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage application state efficiently.",
      },
      {
        question: "What are React hooks?",
        answer: "React hooks are functions that let you use state and lifecycle features in functional components. Examples include useState, useEffect, and useContext.",
      },
      {
        question: "What is the difference between state and props?",
        answer: "Props are read-only data passed from parent to child components, whereas state is managed within the component and can change over time.",
      },
      {
        question: "What is the Virtual DOM?",
        answer: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React updates the Virtual DOM first and then efficiently updates the real DOM based on changes, improving performance.",
      },
    ];
  
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center">Interview Questions & Answers</h2>
        <div className="space-y-6">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 grid gap-4 md:grid-cols-3 md:items-center"
            >
              <h3 className="text-lg font-semibold md:col-span-1">{item.question}</h3>
              <p className="text-gray-700 md:col-span-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Interview;
  