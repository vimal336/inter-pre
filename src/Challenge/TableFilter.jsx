import {useState, useEffect} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  useEffect(()=>{
     const url = "https://jsonplaceholder.typicode.com/posts".then((url.json()).then((data)))
  },[])

  const info = [
     {name: 'ravi', age:'28', },
          {name: 'raj', age:'23'},
  ]

    const items = ['Apple', 'Bananas', 
                'Orange', 'Papaya', 'Guava', 
                'Grape', 'Dates'];

  return (
    <div>
      {
        items.map((item,i)=>{
          return <li className="bg-gray-400 text-red-600" key={i}>{i}:{item}</li>
        })
      }
    </div>
  );
};

export default Tablefilter;
