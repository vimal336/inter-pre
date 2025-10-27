import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);       // store API data
  const [loading, setLoading] = useState(true); // loader state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-3 text-yellow-500 font-semibold">Loading data...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p className="text-xl font-bold">⚠️ Error:</p>
        <p>{error}</p>
      </div>
    );
  }

  // Success
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Fetched Data</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 9).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-yellow-600 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;



import { useState, useEffect } from "react";

const FetchData = async () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);


  try {
    setLoading(true)
    const url = fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await url.json();
    setData(response)
  } catch (err) {

  }
  finally {
    setLoading(false)
  }

  useEffect(() => {

    FetchData();
  }, [])

}

export default FetchData;