const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cruddevs",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
   const { name } = req.body;
   const { avatar } = req.body;
   const { cargo } = req.body;
   const { github } = req.body;
   const { linkedin } = req.body;

   let SQL = "INSERT INTO devs ( name, avatar, cargo, github, linkedin ) VALUES (?,?,?,?,?)";
   db.query(SQL, [name, avatar, cargo, github, linkedin], (err, result) => {
       console.log(err);
   })
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM devs";
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

/*
    Para adicionar os valores dentro do banco
app.get("/", (req, res) => {
    let SQL = 
    "INSERT INTO devs (name, avatar, cargo, github, discord) VALUES ('Jennyfer', 'Dev', 'kilo', 'wwww', 'wwww')";

        db.query(SQL, (err, result) => {
            console.log(err);
    });

}); */
app.listen(3001, ()=> {
    console.log("Rodando servidor");
});




/* app.get("/", (req, res) => {//puxa duas funções o Request e o Result
    res.send("Hello Word");
})  */