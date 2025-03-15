import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    password: "",
  });

  const { name, age, address, password } = form;

  const formChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="App">
        <h4 style={{ textAlign: "center" }}>FORM</h4>
      </div>
      <div>
        <input
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={formChange}
        />
        <br />
        <input
          name="age"
          type="number"
          value={age}
          placeholder="Enter Your Age"
          onChange={formChange}
        />
        <br />
        <input
          name="address"
          placeholder="Enter Your Address"
          value={address}
          onChange={formChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={formChange}
        />
      </div>
    </>
  );
};

export default Form;
