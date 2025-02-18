// import { useState } from "react";
// import data from "./data.json"; // Direct import

// const Mapping = () => {
//   const [userData, setUserData] = useState(data); // Use imported data

//   return (
//     <div>
//       <h1>Users List</h1>
//       {userData.map((user, index) => (
//         <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
//           <h2>{user.name}</h2>
//           <p>Age: {user.age}</p>
//           <p>Email: {user.email}</p>
//           <p>
//             Address: {user.address.street}, {user.address.city}, {user.address.country}
//           </p>
//           <h3>Work Details:</h3>
//           <ul>
//             {user.work.map((jobDetail, i) => (
//               <li key={i}>
//                 <p>Job: {jobDetail.job}</p>
//                 <p>Salary: ${jobDetail.salary}</p>
//               </li>
//             ))}
//           </ul>
//           <p>Hobbies: {user.hobbies.join(", ")}</p>
//           <p>Employed: {user.isEmployed ? "Yes" : "No"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Mapping;

// import useFetch from "./hooks/useFetch";


// const Mapping = () => {
//     const { data, error, loading } = useFetch();
    
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!data) return <div>No data found</div>;

//     return (
//         <>
//             {data.map((user) => (
//                 <div key={user.id}>
//                     <h1>{user.name}</h1>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Mapping;

import useFetch from "./hooks/useFetch";

const Mapping = () => {
  const { data, error, loading } = useFetch();
    
       if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
      if (!data) return <div>No data found</div>;
    return (
        <>
      {data.map( (user) => (
        <div key={user.id}> 
        <h1>{user.name}</h1></div>
      ))}

        </>
    );
};

export default Mapping;