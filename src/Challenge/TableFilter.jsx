import {useState} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  const info = [
     {name: 'vimal', age:'23'},
  ]

  return (
    <div>
      <h1>Table</h1>
      <table></table>
    </div>
  );
};

export default Tablefilter;
