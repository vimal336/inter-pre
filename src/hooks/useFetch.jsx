import { useEffect, useState } from "react"

const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(()=>{
 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((res) => setData(res))
    .catch((err)=>{console.log("error",err)})
    .finally(()=>setLoading(false));
       
},[])
      return {data, error , loading};
};

export default useFetch;

