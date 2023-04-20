const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// router.get("/viewinsurances", function (request, response, next){
//   var query = "SELECT * from insurances ORDER BY insurance_name DESC";
//   con.query(query, function(error, data){
//     if(error){
//       throw error;
//     }else{
//       response.render('View_insurances', {title:
//       'View Insurances', action: 'list', sampleData: data})
//     }
//   })
// })
//enter own password.
//create the database "insurancesystem"

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Handsome123",
  database: "insurancesystem",
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, data) => {
      if (err) return res.json("Login Failed");
      if (data.length > 0) {
        return res.json("logged in");
      } else {
        return res.json("No record found");
      }
    }
  );
});

app.post("/insertinsurance", (req, res) => {
  var params = req.body;
  console.log(params);
  con.query(
    "insert into insurances set ?",
    params,
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.get("/viewinsurances", (req, res) => {
  const sqlGet =
    "select insuranceID, insurance_name, insurance_premium, insurance_age_limit from insurances order by insurance_name";
  con.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "delete from insurances where insuranceID = ?";
  con.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});
app.get("/getinsurance/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "select * from insurances where insuranceID = ?";

  con.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/editinsurance/:id", (req, res) => {
  const { id } = req.params;
  const { insurance_name, insurance_premium, insurance_age_limit } = req.body;

  const sqlUpdate =
    "update insurances set insurance_name = ?, insurance_premium = ?, insurance_age_limit = ? where insuranceID = ?";

  con.query(
    sqlUpdate,
    [insurance_name, insurance_premium, insurance_age_limit, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});
app.listen(3001, () => {
  console.log("listening....");
});
