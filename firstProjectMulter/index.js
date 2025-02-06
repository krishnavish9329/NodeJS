const multer = require("multer")
const express = require("express")
const app = express();

const port = process.env.port || 3000;

app.set("view engine","ejs")
app.use(express.urlencoded())


//const upload = multer({dest:"uploads/"}) // -----first way

const storage = multer.diskStorage({
    destination: function(req,res,callback){
        return callback(null,"./uploads");
    },
    filename: function(req,file,callback){
        return callback(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({  storage })
app.get("/",(req,res)=>{
    res.render(__dirname+"/view/index")
})
app.post("/upload", upload.single("profileImage"), (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})