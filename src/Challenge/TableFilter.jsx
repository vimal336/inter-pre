import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com/u")
  return( 
  <>
  <h1>Table Filter</h1>
  </>)
};

export default TableFilter;