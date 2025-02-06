/**
 * -----Fourth DAY--------
 * Let's use Express
 * Nodemon
 * Environement variables & PORT
 * Rout perameters
 * Heandling multiple routes
 * Postmen
 * HTTP Post Method
 */

//-------Let's use Express------

const express = require('express');
const app = express();


const course=[
    {id:1, name:'javaScript'},
    {id:2, name:'java'},
    {id:3, name:'python'},
    {id:4, name:'c'}
];

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello Krishna ")
    console.log("/ i am ")
})

app.get('/about',(req,res)=>{
    res.send("we create import")
})
//---------Nodemon--------------------
//installaton of Nodemon using npm i nodemon 
// use it using nodemon {name of js file}.js



//-----------Rout perameters-----------
//
// app.get('/courses/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send(req.params.id);
// })
//Hear 'id' is rout perameter

//---------Heandling multiple routes-----


// app.get('/courses/:id',(req,res)=>{
//         console.log(req.params.id)
//         res.send(req.params.id);
//     })
app.get('/courses/:id',(req,res)=>{
    console.log(req.params.id)
    let courses  = course.find(course => course.id === parseInt(req.params.id));
    if(!courses)
    {
        res.send("the course you looking for does not exist");
    }
    res.send(courses);
})



//----------------HTTP Post Method----------------

app.post('/courses',(req,res)=>{
    const cour={
        id:course.length+1,
        name: res.body.name1
    }
    course.push(cour);
    res.send(course);
})


// ------Environement variables & PORT-----

const port = process.env.port||3000;
app.listen(3000,()=>console.log(`port is running on ${port}`))
