const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/learningWithmongoose")
.then(()=>console.log("seccessful note conected"))
.catch(()=>console.log("error note conected"))

const NotesSechna = mongoose.Schema({
    Note:{
        type:String
    },
    createrBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})

const Notes = new mongoose.model("notes",NotesSechna);

module.exports= {
    Notes   
}