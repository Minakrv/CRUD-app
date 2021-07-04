import "./App.css";
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    console.log(name)
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      email: email,
      position: position
    }).then(()=>{
      console.log("Done");
    })
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
        <label>Age:</label>
        <input type="number" 
        onChange={(event) => {
          setAge(event.target.value);
        }}
        />
        <label>Email:</label>
        <input type="text" 
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        />
        <label>Position:</label>
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
