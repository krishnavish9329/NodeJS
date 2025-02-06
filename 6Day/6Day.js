/**
 * ---six Day-----
 * what is middlewear?
 * costom middlewear
 * third party middlewear
 * what is synchronous js and asyncronous js 
 * read a file synchronously 
 * read a file asynchronously
 */

//---whhat is middlewear?--

/**middlewear function are function that access to the request Object and responce Object , 
 * and the next middleware function int the appliction request -response cycle 
*/

//there are 3 type of middlewear
/**
 * 1) custom middlewear
 * 2) buildin Middlewear
 * 3) thired-party middlewear
 */


const express = require('express')
const mymid =require('./6Day_middlewear/6day_middlewear');
const express = require('express');
const app = express();


//----custom middlewear------
app.use(function (req,res,next) {
    console.log('i am first middlewear');
    next();
})

app.use(function (req,res,next) {
    console.log('i am seconde middlewear');
    next();
})

app.use(mymid);

//---buildin Middlewear---
app.use(express.json());

//---thired-party middlewear----

const morgen = require('morgan');
app.use(morgen());
app.use(morgen('tiny'));


const course=[
    {id:1, name:'javaScript'},
    {id:2, name:'java'},
    {id:3, name:'python'},
    {id:4, name:'c'}
];

app.get('/',(req,res)=>{
    res.send("hello");
})


app.get('/course',(req,res)=>{
    res.send(course);
})

app.listen(3000,()=>{
    console.log("port is running in 3000");
})


//--------what is synchronous js and asyncronous js--------

//what is Synchronous and Asynchronous Programming ?
/**
 * Synchronous Programming means it will use a single-thread , so only one operation or program will run at a time
 * 
 * sync is block -- it will only send the server one request at a time and will wait for that request to be answered by the server
 * 
 * Asynchronous is non-block, which means it will send multiple requests to a server at a time
 * 
 * Async increases throughput because multiple operation can run at a time
 */

//read the topic 
/**
 * what is Async programming?
 * callbacks(settiem,setInteval,etc)
 * callback queue and th Event loop
 * promises
 * ansync/await
 * microtask Queue
 * sequentail and parallel Execution of code
 */

//---------read a file synchronously----------------


const fs =require('fs'); // fs is predefind module

console.log('start time')
let data = fs.readFileSync('f1.txt');
console.log("first data file ->" + data +`->\nit's data in buffer formet so it's concat to String datatype`)
let data1 = fs.readFileSync('f1.txt');
console.log("seconde data file->"+data1);
console.log('last time')

console.log("------------------------------------------------")
//-------------read a file asynchronously-----------

console.log('start time');

fs.readFile('f1.txt',cd)
function cd(err,data){
    if(err)
    {
        console.log(err);
    }
    console.log("f1 file datat ->"+data);
}

fs.readFile('f2.txt',cd1)
function cd1(err,data){
    if(err)
    {
        console.log(err);
    }
    console.log("f2 file datat ->"+data);
}

console.log('last time')