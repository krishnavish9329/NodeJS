const { con }= require('../modul/Mysqlconnection')
const express= require('express');
const Router = express.Router();

Router.get("/",(req,res)=>{
    res.render(__dirname+`/../view/index`);

    console.log(__dirname+`/../view/index`)

})

Router.get("/about",(req,res)=>{
 con.connect((err)=>{
     if(err){console.log("error of connection")}
     else{console.log("succesful connection")}
     con.query(`SELECT * FROM sagar`,(err, result)=>{
         if(err){console.log("error of connection ---- "+ err)}
     else{
         console.log(result)
         res.render(__dirname+`/../view/showForm`,{data:result})}
     })
 })
})

Router.post("/",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let moum = req.body.monum;
    console.log(id)
    console.log(name)
    console.log(moum)
    // res.send(req.body)
    
    con.connect((err)=>{
        if(err){console.log("error of connection")}
        else{console.log("succesful connection")}

        con.query(`INSERT INTO sagar VALUE(${id},${name},${moum})`,(err,result)=>{
            if(err)(console.log(err))
            else
            {
                console.log(result)
                res.redirect("/about")
            }
        })
    })
})



module.exports= Router ;
