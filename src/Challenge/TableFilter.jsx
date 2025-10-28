// import { useEffect, useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState([]);       // store API data
//   const [loading, setLoading] = useState(true); // loader state
//   const [error, setError] = useState(null);     // error state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) throw new Error("Network response was not ok");
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Loader
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//         <p className="ml-3 text-yellow-500 font-semibold">Loading data...</p>
//       </div>
//     );
//   }

//   // Error
//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-red-500">
//         <p className="text-xl font-bold">⚠️ Error:</p>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   // Success
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Fetched Data</h1>
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {data.slice(0, 9).map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-lg font-semibold text-yellow-600 mb-2">{item.title}</h2>
//             <p className="text-gray-600 text-sm">{item.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FetchData;



import { useState, useEffect } from "react";

const FetchData = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const urldata = async () => {
      try {
        setLoading(true)
        const url = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await url.json();
        setData(response)
      } catch (err) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }

    }

    urldata();
  }, [])


  if (loading) return <h1>loading...</h1>

  if (error) return <h2>{error}</h2>

  return (
    <div>
  

       {data.map((item) => ( <div key={item.id}>
            <h1 className="bg-green-400">
              {item.title}</h1>
          </div>))}
    </div>
  )

}

export default FetchData;


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
