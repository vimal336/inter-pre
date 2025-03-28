import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive designs.',
    },
    {
      title: 'How to learn programming?',
      content: 'Start with the basics and practice regularly.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {items.map((item, index) => (
        <div key={item.title} className="border rounded-lg mb-2">
          <button
            className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-medium">{item.title}</span>
            <span className="text-xl">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          
          <div
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;