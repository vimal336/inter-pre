// import React, { useMemo, useState } from "react";

// export const UseMemoHook = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, SetDark] = useState(false);

  
//   //const doubleNumber = slowFunction(number);

//   const doubleNumber = useMemo(()=>{
//     return slowFunction(number)
//   },[number])

//   const themeStyle = {
//     backgroundColor: dark ?"white":"black",
//     color: dark ?"black":"white"
// }

//   return (
//     <>
//       <p>UseMemoHook</p>
//       <input type="number" value={number}
//       onChange={(e)=> setNumber(e.target.value)}
//       />
//      <button onClick={() => SetDark((curr)=>!curr)}>Toggle Button</button>
//      <div style={themeStyle}>{doubleNumber}</div>
//     </>
//   );
// };

// function slowFunction(num){
//     console.log("slow function")
//     for(let i=0; i<=1000000000; i++){}
//     return num * 2
// }


// import { useMemo, useState } from "react";

// export const UseMemoHook = () => {

//   //const doubleNumber = slowFunction(number);

//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   // useMemo caches the squared value and only recomputes when `count` changes
//   const squaredValue = useMemo(() => {
//     console.log("Calculating square...");
//     return count * count;
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h2>Squared: {squaredValue}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setToggle(!toggle)}>
//         Toggle {toggle ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// };



// import { useState } from "react";

// export const UseMemoHook = () => {
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   // Every render will recompute this value, even if `count` has not changed
//   const squaredValue = (() => {
//     console.log("Calculating square...");
//     return count * count;
//   })();

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h2>Squared: {squaredValue}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setToggle(!toggle)}>
//         Toggle {toggle ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// };


import { useState, useMemo } from "react";


export const UseMemoHook = () => {

  const [ count, setCount] = useState(0);
  const [ toggle, setToggle] = useState(false);

    //without usememo
  const square = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  },[count]);



  //without usememo
  // const square = (() => {
  //   console.log("Calculating square...");
  //   return count * count;
  // })();

  return(
  <>
  <h1>count:{count}</h1>
  <h1>{square}</h1>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={() => setToggle(!toggle)}>
    Toggle {toggle ? "ON" : "OFF"}
  </button>
  </>

  )
}

