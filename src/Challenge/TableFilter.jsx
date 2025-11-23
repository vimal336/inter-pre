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

    const items = ['Apples','kiwi', 'Bananas', 
                'Orange', 'Papaya', 'Guavas', 
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
