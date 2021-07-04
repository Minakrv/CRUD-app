import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
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
        <button> Add Employee</button>
      </div>
    </div>
  );
}

export default App;
