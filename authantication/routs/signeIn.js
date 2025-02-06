const express = require("express");
const { UserSignIn, UserentrDataInDataBase, AddNotes, viewNotes, UsersignUpGet, UsersignUpPost} = require("./../controlar/UserRoutersControls")

const { checkForAuthetication , restritTo } = require("./../middelwears/userMiddilwear")
const Routs =express.Router();

Routs.get("/",UserSignIn)
Routs.post('/',UserentrDataInDataBase)

Routs.get("/signeUP", UsersignUpGet)
Routs.post("/signeUP",UsersignUpPost)

// Routs.get("/Notes",restritTo(['NORMAL']),viewNotes) // statfull authantication // authorization
Routs.get("/Notes",restritTo(['NORMAL']),async(req,res)=>{
    try{
        console.log(req.body+"----------------------\n\n")
        const id = req.result._id;
        console.log(id +" view Node js ")
        const Note = await Notes.find({createrBy:id});
        // console.log(Note)
        res.render(__dirname+`./../view/TodoList`,{data:Note})
    }
    catch(err){
        console.log(err)
    }
}) // statfull authantication // authorization
Routs.post("/Notes",restritTo(['NORMAL']),AddNotes)  // statfull authantication // authorization


module.exports=Routs;