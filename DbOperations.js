const express = require("express");
const mysql = require("mysql");
const db=require('./dbconfig');
var app=express();


// connect to the MySQL server
// db.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//      }
//           let sql = "select * from customer";
//      // execute the insert statment
//      db.query(sql,(err,rows) => 
//      {
//         if(err) throw err;
//         return console.log(rows);
//      }); 
//     });


// // connect to the MySQL server
//  db.connect(function(err) {
//    if (err) {
//      return console.error('error: ' + err.message);
//    }

//  let sql = "INSERT INTO customer(custid,custname,MobileNo)VALUES(5,'kavya','8899445566')";
// // execute the insert statment
//   db.query(sql);
//  return console.log('inserted successfully..');
// });

//   let sql = "select * from customer";
//   // execute the insert statment
//   db.query(sql,(err,rows) => 
//    {
//    if(err) throw err;
//    return console.log(rows);
//  }); 


  
// let sql = "update customer SET custname='Anvi k' where custid=3";
// // execute the Update statment
// db.query(sql);
//  console.log('Updated successfully..');

 






 let sql = "Delete from customer where custid=5";
 // execute the Update statment
   db.query(sql);
    console.log('Deleted successfully..');
 


