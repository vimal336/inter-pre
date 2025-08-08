import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com/post/1").then(((res)=>(res.json())));

  console.log(data)

  setFetchData(fetchdata)
  return( 
  <>
  <h1>Table Filter</h1>
  <h1>{fetchData}</h1>
  </>)
};

export default TableFilter;