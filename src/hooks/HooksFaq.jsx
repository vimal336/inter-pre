import faqData from "./HooksData"; 
import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="p-4">
      {faqData.map((item, index) => (
        <div key={index} className="border p-3 mb-2 rounded">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left font-bold"
          >
            {item.question}
          </button>
          {selected === index && <div className="mt-2">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
