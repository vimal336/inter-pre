// import React, { useEffect, useState } from "react";

// export const Useeffecthook  = () =>{

//   const [even, setEven] = useState(0);
//   const [time, setTime] = useState(0);

//   // No Dependencies

//   // useEffect(()=>{
//   //   console.log("No Dependency")
//   // });

//   //Empty Dependency Array

//   //useEffect(()=>{
//   //console.log("Empty Dependency Array")
//   //},[]);

  
//   //State Dependency Array

//   useEffect(()=>{
//   console.log("State Dependency Array")
//   },[time]);

//   const addeven = () => {
//     setEven((ev)=>(ev)+2)
//   }

//   const addodd = () => {
//     setEven((o)=>(o)+1)
//   }

//   const addtime = () => {
//     setTime((o)=>(o)+1)
//   }

//   return(
//  <>
//   <h1>Useffect Hook</h1>
//   <p>{even}</p>
//   <p>Clicked {time} Times</p>
//   <button onClick={addodd}>Odd</button>
//   <button onClick={addeven}>Even</button>
//   <button onClick={addtime}>T</button>
//  </>
//   )
// }

import React, { useState, useEffect } from "react";

const Useeffecthook = () => {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
          console.log("useEffect called");
    },[])
    const add = () =>{
        setNumber(number+1)
    }
    return(
        <>
            <h1>Effect</h1>
            <h1>{number}</h1>
            <button onClick={add}>+</button>
        </>
    )
}

export default Useeffecthook;