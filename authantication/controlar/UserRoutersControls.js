const { v4:uuidv4 } = require("uuid")
const { userdata } =require("./../modul/connectionintouser")
const { Notes } =require("./../modul/notesModul")
const { setUser }=require("./../servecis/auth")

async function UserSignIn(req,res){
    res.render(__dirname+`/../view/home`)
}

async function UserentrDataInDataBase(req,res){
    let name = req.body.Name
    let Gmail = req.body.Gmail
    let password = req.body.password

    console.log(name)
    console.log(Gmail)
    console.log(password)
    try{
        let result = await userdata.create({
            name: name,
            Gmail: Gmail,
            password: password
        })
        console.log( result);
        return res.redirect("/signeUP")
    }
    catch(err)
    {
        console.log("data Enter Error")
    }
}

function UsersignUpGet(req,res){
    return res.render(__dirname+`/../view/signeUp`)
}

async function UsersignUpPost(req,res){
    let Gmail = req.body.Gmail;
    let password = req.body.password;
    console.log(Gmail + password)
    const result =  await userdata.findOne({
        Gmail:Gmail,
        password: password
    })

    if(!result)
    {
        return res.send("error")
    }
        //--------------------------stateless authantication firs way 1------------
        // const sessionId = uuidv4();
        // setUser(sessionId,result);
        // res.cookie("Uid",sessionId);
        // return res.redirect("/Notes");

        //--------------------------statefull authantication seconde way 2-----------
        console.log(result+ "  UserSignUppost--")
        const Token = setUser(result);
        res.cookie("Uid",Token);
        return res.redirect("/Notes");

        //---------------------------(authantication)Authorization header Three way 3--------------
        // const Token = setUser(result);
        // // res.cookie("Uid",Token);
        // return res.json({Token})
}

async function viewNotes(req,res){
    try{
        const id = req.result._id;;
        console.log(id +" view Node js ")
        const Note = await Notes.find({createrBy:id});
        // console.log(Note)
        res.render(__dirname+`./../view/TodoList`,{data:Note})
    }
    catch(err){
        console.log(err)
    }
}

async function AddNotes(req,res){
    try{
        let note= req.body.notes;
        let id = req.result._id;
        // console.log(id + " ------------------ AddNotes Id");
        
        const result = await Notes.create({
            Note: note,
            createrBy: id
        })
        // console.log(result+"----")
        return res.redirect('/Notes')
    
    }catch(err){
        console.log(err)
    }
}
module.exports={
    UserSignIn,
    UserentrDataInDataBase,
    UsersignUpGet,
    UsersignUpPost,
    viewNotes,
    AddNotes
}