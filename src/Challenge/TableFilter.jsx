import {useState} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  const info = [
     {name: 'vimal', age:'23'},
          {name: 'raj', age:'23'},
  ]

    const items = ['Apple', 'Banana', 
                'Orange', 'Papaya', 'Guava', 
                'Grapes', 'Date'];

  return (
    <div>
      {
        items.map((item,i)=>{
          return <li key={i}>{item}</li>
        })
      }
    </div>
  );
};

export default Tablefilter;
