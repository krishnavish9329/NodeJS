const express = require('express');
const mongooes = require('mongoose');
const bodyParser =require('body-parser');

const app =express();


app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


//--------------------mongooes connected to node js --------------------------

mongooes.connect('mongodb://127.0.0.1:27017/ecom') 
.then(()=>{console.log("mongooes is succeccfull conected to node js")})
.catch(()=>{console.log("coulden't connected to mongooes")})

const logicSchema= mongooes.Schema({
    username:{type: String, required: true, minlength:1, maxlength:25},
    password:{type: String, required: true, minlength:1, maxlength:25},
    gmail:{type:String }
})

const userdata = mongooes.model("users",logicSchema)


//-----------------------AIP------------------------------



app.get("/login" ,async (req,res)=>{   
    res.sendFile(__dirname+`/index.html`)
})

app.post('/login', async(req,res)=>{
    let name =  req.body.userName;
    let pass = req.body.pass;

    name = name.trim();
    pass = pass.trim();
    // console.log(typeof(name));
    try{
        // const data = await userdata.find({username:`${name}`,})
        const data = await userdata.find({})

        // console.log(data.length)
        if(data.length <1)
        {
            res.send(`<h>not found</h><br><a href="/login">return</a>` );
        }
        else
        {
            
            
            for(let i =0 ;i<data.length; i++)
            {
                if(data[i].username=== name)
                if(data[i].password === pass)
                {
                // res.send(data)
                res.render(__dirname+"/ejs/index",{data1:data})
                exit();
                }  
            }
            res.send(`<h> password error </h> <a href="/login">return</a>`);
                        
        }    
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get('/registion',(req,res)=>{
    res.sendFile(__dirname + "/registration.html")
})

app.post('/registion',async(req,res)=>{
    let name =  req.body.userName.trim();
    let gmail =  req.body.gmail.trim();
    let pass = req.body.pass.trim();

    console.log( name + gmail + pass)
    try{
    const data = await userdata.create({username : `${name}`, password : `${pass}`, gmail: `${gmail}`})
    console.log(data);
    res.status(201).send(`registration succeccfuly<br> <a href="/login">return</a>`) ;
    }
    catch(e)
    {
        console.log(e);
    }
})

app.listen(3000,()=>{
    console.log("server is runing at 3000");
})


