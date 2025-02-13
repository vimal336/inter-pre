// import { useState, useEffect } from "react";

import { useState } from "react";

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(storedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (!task.trim()) return;

//     if (editId !== null) {
//       setTasks(
//         tasks.map((t) => (t.id === editId ? { ...t, text: task } : t))
//       );
//       setEditId(null);
//     } else {
//       setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
//     }

//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };

//   const editTask = (id) => {
//     const toEdit = tasks.find((t) => t.id === id);
//     setTask(toEdit.text);
//     setEditId(id);
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
//       <h2 className="text-xl font-bold mb-4">React To-Do List</h2>
//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter task..."
//           className="border p-2 flex-1 rounded"
//         />
//         <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
//           {editId !== null ? "Update" : "Add"}
//         </button>
//       </div>
//       <ul>
//         {tasks.map((t) => (
//           <li
//             key={t.id}
//             className={`flex justify-between items-center p-2 border-b ${t.completed ? "line-through text-gray-500" : ""}`}
//           >
//             <span onClick={() => toggleComplete(t.id)} className="cursor-pointer flex-1">
//               {t.text}
//             </span>
//             <div className="flex gap-2">
//               <button onClick={() => editTask(t.id)} className="text-yellow-500">Edit</button>
//               <button onClick={() => deleteTask(t.id)} className="text-red-500">Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

const TodoApp = () => {

 const [data, setData] = useState({
  name:"",
  age: "",
  email:"",
  phone:"",
 });

 console.log(data)


  return (
    <>
      <h1 className="text-center">Todo List</h1>
      <div className="flex flex-col items-center justify-center">
      <input className="h-[50px] mt-2 w-[500px]" type="text" value={data.name} onChange={e => setData(e.target.value)} name="name" placeholder="Enter a Name"/>
      <input className="h-[50px] mt-2 w-[500px]" type="text" value={data.age }  onChange={e => e.target.value} name="age" placeholder="Enter a Age"/>
      <input className="h-[50px] mt-2 w-[500px]" type="text" value={data.email}  onChange={e => e.target.value} name="email" placeholder="Enter a Email"/>
      <input className="h-[50px] mt-2 w-[500px]" type="text" value={data.phone} onChange={e => e.target.value} name="phone" placeholder="Enter a Number"/>
      <button className="bg-green-500 p-4 w-[100px]">Add Data</button>
      </div>
    </>
  );
};
export default TodoApp;
