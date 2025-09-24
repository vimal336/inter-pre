import {useState, useEffect} from "react"

const Tablefilter = () => {
  const [data, tableData] = useState([])

  useEffect(()=>{
     const url = "https://jsonplaceholder.typicode.com/posts".then((url.json()).then((data)))
  },[])

  const info = [
     {name: 'ravi ram', age:'20', },
          {name: 'raj', age:'24'},
               {name: 'ram', age:'24'},
  ]

    const items = ['Apples','kiwi', 'Bananas', 
                'Orange', 'Papaya', 'Guavas', 
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
