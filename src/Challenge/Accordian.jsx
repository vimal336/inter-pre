import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg mb-2">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <ChevronDown
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 border-t bg-white">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Usage Example
const items = [
  { title: "Section 1", content: "This is the content of Section 1." },
  { title: "Section 2", content: "This is the content of Section 2." },
  { title: "Section 3", content: "This is the content of Section 3." },
];

export default function App() {
  return (
    <div className="p-6">
      <Accordion items={items} />
    </div>
  );
}
