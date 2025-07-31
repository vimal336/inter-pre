import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com/users").then(((res)=>(res.data)))


  return( 
  <>
  <h1>Table Filter</h1>
  </>)
};

export default TableFilter;