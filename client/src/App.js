import "./App.css";
import { useState } from "react";
import Axios from 'axios';
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = ()=>{
    axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      email: email,
      position: position
    });
  }


  return (
    <div className="App">
      <div className="information">
        <lable>Nmae:</lable>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <lable>Age:</lable>
        <input type="number" 
        onChange={(event) => {
          setAge(event.target.value);
        }}
        />
        <lable>Email:</lable>
        <input type="text" 
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        />
        <lable>Position:</lable>
        <input type="text" 
        onChange={(event) => {
          setPosition(event.target.value);
        }}
        />
        <button onClick = {addEmployee}> Add Employee</button>
      </div>
    </div>
  );
}

export default App;
