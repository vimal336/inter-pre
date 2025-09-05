import {useState} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])
  return (
    <div>
      <h1>Table Data</h1>
      <table></table>
    </div>
  );
};

export default Tablefilter;
