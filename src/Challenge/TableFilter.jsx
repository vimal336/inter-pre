import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com/posts").then(((res)=>(res.json())))


  return( 
  <>
  <h1>Table Filter</h1>
  </>)
};

export default TableFilter;