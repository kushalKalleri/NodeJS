function getCustomers() {
    let selectQuery = 'SELECT * FROM customer';    
    let query = sql.format(selectQuery);
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
       return data ;
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // select rows
    getCustomers();
},5000); 



var config=require("./dbconfig");
var express = require("express")
var mysql=require("mysql")
var app = express();
let db      = mysql.createConnection({
  host : 'localhost',
  user : 'kushal',
  password : '',
  database: "customer"
});

app.get("/GetCustomer_list", (req, res) => {
  let query = "select * from customer"
  //let query="show databases"
  //mysql.createConnection(config,query,function(err, rows, fields) {
 
  db.query(query, function(err, rows, fields) {
    if (err) throw err;
   
    /*If you are creating api then get response in json format*/
    res.json(rows);
  });
});

app.get('/', function(req, res) {
    res.send('Hello Sir')
})

// app.get("/Customer", (req, res) => {
//   let post = { CustID:2 ,CustName: "Kavya", MobileNo: "7799887744" };
//   let sql = "INSERT INTO customer  SET ?";
//   let query = db.query(sql, post, (err) => {
//     if (err) {
//       throw err + sql;
//     }
//     res.send("customer 2 added");
//   });
// });


// // Update customer
// app.get("/updatecustomer/:id", (req, res) => {
//   let newName = "Kushal";
//   let sql = `UPDATE customer SET custname = '${newName}' WHERE custid = ${req.params.id}`;
//   let query = db.query(sql, (err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("Post updated...");
//   });
// });


// // Delete customer
// app.get("/deletecustomer/:id", (req, res) => {
//   let sql = `DELETE FROM customer WHERE custid = ${req.params.id}`;
//   let query = db.query(sql, (err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("customer deleted");
//   });
// });

app.listen("3000", () => {
    console.log("Server started on port 3000");
  });