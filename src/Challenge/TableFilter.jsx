import {useState} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  const info = [
     {name: 'vimal', age:'25'},
          {name: 'raj', age:'23'},
  ]

    const items = ['Apple', 'Bananas', 
                'Orange', 'Papaya', 'Guava', 
                'Grape', 'Dates'];

  return (
    <div>
      {
        items.map((item,i)=>{
          return <li className="bg-gray-400 text-red-400" key={i}>{i}:{item}</li>
        })
      }
    </div>
  );
};

export default Tablefilter;
