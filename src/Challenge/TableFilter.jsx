import {useState, useEffect} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  useEffect(()=>{
     const url = "https://jsonplaceholder.typicode.com/posts".then((url.json()).then((data)))
  },[])

  const information = [
     {name: 'ravi', age:'35', },
          {name: 'raj', age:'24'},
               {name: 'ram', age:'28'},
  ]

    const items = ['Apple','kiwi', 'Bananas', 
                'Orange', 'Papayas', 'Guavas', 
                'grapes'];

  return (
    <div>
      {
        items.map((item,i)=>{
          return <li className="bg-gray-400 text-red-600" key={i}>{i}:{item}</li>
        })
      }
    </div>
  )

// }

//export default FetchData;


// import { useState, useEffect } from "react";

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // should be null, not []

//   useEffect(() => {
//     const urldata = async () => {
//       try {
//         setLoading(true);

//         // 🧩 FIX 1: await the fetch call itself
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         // 🧩 FIX 2: check if response is ok
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     urldata();
//   }, []);

//   // 🧩 FIX 3: proper conditional rendering
//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1>Error: {error}</h1>;

//   // 🧩 FIX 4: map must return JSX explicitly
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchData;


import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const items = [
    "Apples",
    "Banana",
    "Cherry",
    "Dates",
    "Elderberry",
    "Fig",
    "Grapes",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">
        Simple Search
      </h1>

      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search fruits..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        <ul className="mt-4 space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white border rounded-md shadow-sm hover:bg-orange-50 transition"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
