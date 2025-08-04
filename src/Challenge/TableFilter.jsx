import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com/posts/1").then(((res)=>(res.json())));

  console.log(data)

  setFetchData(data)


  return( 
  <>
  <h1>Table Filter data</h1>
  <h1>{fetchData}</h1>
  </>)
};

export default TableFilter;