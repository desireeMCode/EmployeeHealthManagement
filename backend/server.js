const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//enter own password.
//create the database "insurancesystem"
const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Desiree123",
  database: "insurancesystem",
} 
);

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
    (err, result) =>{
        if(err){
            throw err
        }
        else{
            if(result.length>0){
                res.send(result)
            }
            else{
                res.send({message: "WRONG USERNAME OR PASSWORD"})
            }
        }
    })
})

app.listen(3001, () => {
  console.log("listening....");
});
