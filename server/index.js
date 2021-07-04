const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'employeeSystem',
})

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
})

app.listen(3001, ()=>{
    console.log(`Server running on ${PORT}`);
})