// import { useState } from "react";

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null); 

//   const toggleShow = (index) =>{
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   const items = [
//         {
//           title: 'What is React?',
//           content: 'React is a JavaScript library for building user interfaces.',
//         },
//         {
//           title: 'Why use Tailwind CSS?',
//           content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive designs.',
//         },
//         {
//           title: 'How to learn programming?',
//           content: 'Start with the basics and practice regularly.',
//         },
//       ];

//   return (
//     <>
//       <h1 className="text-center bg-blue-400 text-xl w-[150px] mt-2 mx-auto">Accordian</h1>
//       <div className="text-center p-4">
//       {
//         items.map((item,index)=>(
//           <div key={index} className="m-4 bg-white shadow-md rounded cursor-pointer">
//           <h1 onClick={()=>toggleShow(index)}  className="text-xl border bg-gray-300 p-3 ">{item.title}</h1>
//           <div className={`${openIndex === index ? "block" : "hidden"} mt-4 p-4 border bg-green-400 rounded`}>
//           <p className="text-xl">{item.content}</p> 
//           </div>
//          </div>
//         ))
//       }
//       </div>
//     </>
//   );
// };

// export default Accordion;


// import { useState } from "react";

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleShow = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

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
//     <>
//       <h1 className="text-center bg-blue-400 text-xl w-[150px] mt-2 mx-auto">
//         Accordion
//       </h1>
//       <div className="text-center p-4">
//         {items.map((item, index) => (
//           <div key={index} className="m-4 bg-white shadow-md rounded cursor-pointer">
//             <h1
//               onClick={() => toggleShow(index)}
//               className="text-xl border bg-gray-300 p-3 flex justify-between items-center"
//             >
//               {item.title}
//               <span className="text-2xl font-bold">
//                 {openIndex === index ? '−' : '+'}
//               </span>
//             </h1>
//             <div
//               className={`${
//                 openIndex === index ? "block" : "hidden"
//               } mt-4 p-4 border bg-green-400 rounded`}
//             >
//               <p className="text-xl">{item.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Accordion;


import { useState } from "react";

const items = [
  {
    title: "what is javascript?",
    content: "js is a programming language"
  }, {
    title: 'Why use Tailwind CSS?',
    content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to build responsive designs.',
  }
]

const Accordian = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleShow = (i) =>{
    setOpenIndex(openIndex === i? null : i)
  }
  
  return (
    <>
      <h1 className="">accordian</h1>
      {
        items.map((item, i)=>(
          <div key={i}>
            <h1 onClick={()=>toggleShow(i)} className="bg-green-400">{item.title}</h1>
            {
              openIndex == i && (
              <p>{item.content}</p>)
            }
          </div>
        ))
      }
    </>
  )

}



export default Accordian;

