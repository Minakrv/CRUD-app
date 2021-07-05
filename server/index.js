const { Sequelize, DataTypes, Op } = require("sequelize"); 
const express = require("express");
const app = express();
const mysql = require("mysql");


const cors = require("cors");
require("dotenv").config();


app.use(cors());
app.use(express.json());

  

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

app.listen(3000, async() => {
    await sequelize.authenticate();
    await sequelize.sync();
  });

  const shutdown = () => {
    console.info(`SIGTERM signal received`);
    console.log(`Closing http server`);
    server.close(async () => {
        console.log(`HTTP server closed.`);
        await sequelize.close();
    });
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

  