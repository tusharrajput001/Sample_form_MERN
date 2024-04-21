// Form.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  console.log(name, age);

  const handleSubmit = async (e) => {
    e.preventDefault();
 
      const addUser = { name, age };
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      }

      if (response.ok) {
        console.log(result);
        setName("");
        setAge(0);
        navigate("/Submitted");
        window.location.reload();
      }
    
  };

  return (
    <>
    <div className="form-container">
      

    <h1>Student Registration Form</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        name="age"
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Form;
