const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PASSWORD",
    database: 'employeeSystem'
  });
  
  

app.post('/create', (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const position = req.body.position;

    db.query('INSERT INTO employee (name, age, email, position) VALUES (?,?,?,?)', 
    [name, age, email, position], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("values inserted");
        }
    }
    );
});

app.get('/employees', (req,re) => {
    db.query('SELECT * employee', (err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  