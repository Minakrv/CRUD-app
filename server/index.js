const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'employeeSystem',
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
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });