const bodyParser = require("body-parser");
const express = require("express")
const Routs =require('./routs/signeIn')
const cookieParser = require('cookie-parser');
const { checkForAuthetication } = require("./middelwears/userMiddilwear")

const app = express();
const port = process.env.port || 3000;

app.set("view engine","ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(checkForAuthetication)

app.use("/", Routs)

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
});


