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
//     {
//       data.map((users)=>(
//         <>
//         <table border="1">
//        <tr key={users.id} >
//          <td>
//            {users.username}
//            {users.email}
//          </td>
//         </tr>
//         </table>
//         </>
//       ))

//     }
//     </>
//   );
// }

// export default MyTask

import { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="text-center border-b hover:bg-gray-50">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

