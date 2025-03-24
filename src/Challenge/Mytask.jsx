// import { useEffect, useState } from 'react';

// const MyTask=() =>{

// const [data, setData] = useState([]);

// const fetchData = async () =>{
//   const url = await fetch("https://jsonplaceholder.typicode.com/users");
//   const res = await url.json();
//   console.log(res)
//   setData(res)
// }

// useEffect(()=>{
//  fetchData() 
// },[])

//   return (
//     <>
//   <div className="overflow-auto">
//   <table className="border-collapse border border-gray-300 w-full table-auto">
//     <thead>
//       <tr className="border-2 bg-blue-500 text-white text-sm md:text-base">
//         <th className="p-2 md:p-4">Name</th>
//         <th className="p-2 md:p-4">Email</th>
//         <th className="p-2 md:p-4">Username</th>
//         <th className="p-2 md:p-4">Address</th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((users) => (
//         <tr key={users.id} className="border bg-white text-center text-sm md:text-base">
//           <td className="p-2 md:p-4">{users.name}</td>
//           <td className="p-2 md:p-4">{users.email}</td>
//           <td className="p-2 md:p-4">{users.username}</td>
//           <td className="p-2 md:p-4">{users.address.street}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

// <table className='border-5'>
//           <thead >
//             <tr className='border-2 bg-blue-500 '>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Username</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.map((users)=>(

//                 <tr  key={users.id} className='border bg-white text-center '>
//                  <td className="py-2 px-4">{users.name}</td>
//                  <td className="py-2 px-4">{users.email}</td>
//                  <td className="py-2 px-4">{users.username}</td>
//                  <td className="py-2 px-4">{users.address.street}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//     </>
//   );
// }

// export default MyTask

// import { useEffect, useState } from "react";

// const DataTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users") 
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center text-blue-500">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="overflow-x-auto p-4">
//       <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="py-2 px-4 border-b">ID</th>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id} className="text-center border-b hover:bg-gray-50">
//               <td className="py-2 px-4">{user.id}</td>
//               <td className="py-2 px-4">{user.name}</td>
//               <td className="py-2 px-4">{user.email}</td>
//               <td className="py-2 px-4">{user.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;

import { useState , useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

    const fetchData = async () =>{
       const url = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await url.json();
        console.log(res);
        setData(res);
    }

    useEffect(()=>{
           fetchData();
    },[])

  return (
    <div>
      <table>
        <thead className="bg-blue-200">
            <tr >
            <th>Name</th>
            <th> Username </th>
            <th>Email</th>
            </tr>
        </thead>
        {
            data.map((user,i)=>(
              <tbody key={i} className="bg-gray-200">
            <tr >
            <td>{user.name}</td>
            <td> {user.username} </td>
            <td>{user.email}</td>
            </tr>
        </tbody>
            ))
        }
                </table>
    </div>
  );
};

export default App;
