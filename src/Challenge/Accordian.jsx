// import { useState } from 'react';

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const items = [
//     {
//       title: 'What is React?',
//       content: 'React is a JavaScript library for building user interfaces.',
//     },
//     {
//       title: 'Why use Tailwind CSS?',
//       content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive designs.',
//     },
//     {
//       title: 'How to learn programming?',
//       content: 'Start with the basics and practice regularly.',
//     },
//   ];

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       {items.map((item, index) => (
//         <div key={item.title} className="border rounded-lg mb-2">
//           <button
//             className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
//             onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//             aria-expanded={activeIndex === index}
//             aria-controls={`accordion-content-${index}`}
//           >
//             <span className="font-medium">{item.title}</span>
//             <span className="text-xl">
//               {activeIndex === index ? '−' : '+'}
//             </span>
//           </button>

//           <div
//             id={`accordion-content-${index}`}
//             className={`overflow-hidden transition-all duration-300 ${
//               activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
//             }`}
//           >
//             <div className="p-4 bg-white">{item.content}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import { useState } from "react";

const Accordion = () => {
  const [items, setItems] = useState(null);

  const data = [
    {
      question:"hello, how are you?",
      answer:"hi, im fine"
    },
    {
      question:"what is your your name?",
      answer:"john"
    },
    {
      question:"where are you from ?",
      answer:"usa"
    }
  ]

  return (
    <>
      <h1>Accordian</h1>
      <div className="text-center">
      {
        data.map((que,i)=>(
         <div key={i} className="border m-4 bg-white h-10">
          <h1 className="text-xl ">{que.question}</h1>
          <p className="hidden active">{que.answer}</p> 
         </div>
        ))
      }
      </div>
    </>
  );
};

export default Accordion;
