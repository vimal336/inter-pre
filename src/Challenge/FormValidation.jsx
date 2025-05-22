// import { useState } from "react";

// export default function FormWithValidation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {

//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));

//     // Clear error on input
//     setErrors((prev) => ({
//       ...prev,
//       [e.target.name]: "",
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       alert("Form submitted successfully!");
//       console.log("Submitted data:", formData);
//       // Reset form
//       setFormData({ name: "", email: "" });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
//     >
//       <h2 className="text-xl font-bold">React Form</h2>

//       <div>
//         <label className="block font-medium">Name:</label>
//         <input
//           name="name"
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded mt-1"
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//         )}
//       </div>

//       <div>
//         <label className="block font-medium">Email ID</label>
//         <input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded mt-1"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
//       >
//         Submit 
//       </button>
//     </form>
//   );
// }

import { useState } from "react";

const FormValidation = () => {

  const [FormData, setFormData] = useState({
    name: "",
    age: "",
  })

  const handleChange = (e) =>{
    
  }

  return(
    <>
    <div className="bg-gray-200 flex flex-col w-1/4 h-[10rem] mx-auto p-2 m-4">
    <label htmlFor="">Name</label>
    <input 
    type="text" 
    name="name"
    value={FormData.name}
    onChange={handleChange}
   />
    <label htmlFor="">Age</label>
    <input 
    type="number" 
    name="age" 
    value={FormData.age}
    onChange={handleChange}
    />
    <button className="bg-red-400">Submit</button>
    </div>
    </>
  )
}

export default FormValidation;
