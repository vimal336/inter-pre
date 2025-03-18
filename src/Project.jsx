const Project = () => {
  const questionsAndAnswers = [
    {
      question: "SolarPunk DAO",
      answer: (
        <>
         
        </>
      ),
    },
    {
      question: "Saroban Hooks",
      answer: (
        <>
         
        </>
      ),
    },
    {
        question: "DailyPing",
        answer: (
          <>
           
          </>
        ),
      },
      {
        question: "Memto Admin Panel",
        answer: (
          <>
           
          </>
        ),
      },
  ];

  return (
    <div className="p-6 mx-auto bg-white rounded-xl shadow-md space-y-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center">
       Projects and Teck Stack i worked
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

export default Project;
