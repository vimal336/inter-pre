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
  const [formValue, setFormValue] = useState({
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValue.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formValue.email.trim()) {
      newErrors.email = "Email is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Submitted data:", formValue);
      setFormValue({ name: "", email: "" });
    }
  };

  return (
    <form className="flex mx-auto w-[200px]" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={formValue.name}
        onChange={handleChange}
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <label>Email ID</label>
      <input
        name="email"
        type="text"
        value={formValue.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-400 bg-black">{errors.email}</p>}

      <button
        type="submit"
        className="bg-blue-400 text-red-400 px-4 py-2 rounded hover:bg-gray-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormValidation;
