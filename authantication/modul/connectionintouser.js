// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password: "1234",
//     database: "",
//     port: "3306"
// })



//-------------------------------------------------------------------

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/learningWithmongoose")
.then(()=>console.log("connection successfull"))
.catch(()=>console.log("connection error"))

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Gmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required : true
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL"
    }
})

const userdata = new mongoose.model("users" ,userschema)


module.exports =({
    userdata
}) ;