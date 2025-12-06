// import { useState } from "react";

// const TanstackQuery = () => {
// const { data, isLoading, error } = useQuery({

// })

// const fetch = async = () =>{
// const url = fetch("jsonplaceholder.typicode.com/comments")
// }
// }

// export default TanstackQuery;


import { useQuery } from "@tanstack/react-query";

const TanstackQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h1 className="text-red-300">Comment lists</h1>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
};

export default TanstackQuery;
