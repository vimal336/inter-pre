import { useState } from "react";


const TableFilter = () => {
  const [fetchData, setFetchData] = useState([])

  const data = fetch("https://jsonplaceholder.typicode.com")
  return( 
  <>
  <h1>Table</h1>
  </>)
};

export default TableFilter;