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
        items.map
      }
    </div>
  );
};

export default Tablefilter;
