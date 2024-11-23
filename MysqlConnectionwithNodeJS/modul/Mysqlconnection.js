const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"sagar",
    port:'3306'
})

module.exports=({
    con
})