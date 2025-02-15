import { useState, useEffect } from "react";

const Mapping = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch JSON from a local file or API
    fetch("/data.json") // Change this URL if fetching from an API
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {data.map((user, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>
            Address: {user.address.street}, {user.address.city}, {user.address.country}
          </p>
          
          {/* Work as an array */}
          <h3>Work Details:</h3>
          <ul>
            {user.work.map((jobDetail, i) => (
              <li key={i}>
                <p>Job: {jobDetail.job}</p>
                <p>Salary: ${jobDetail.salary}</p>
              </li>
            ))}
          </ul>

          <p>Hobbies: {user.hobbies.join(", ")}</p>
          <p>Employed: {user.isEmployed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default Mapping;
