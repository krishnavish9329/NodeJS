const express= require('express');
const bodyParser = require('body-parser');

const HomeRouts= require("./routs/Home")

const app = express();

app.set("view engine",'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use("/",HomeRouts)

app.listen(3000,()=>{
    console.log(`http://localhost:3000/`)
    // console.log(__dirname)
})