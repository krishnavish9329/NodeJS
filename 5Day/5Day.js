/**
 * --------fift day----------
 * How to update the file
 * How to delete the particular data
 */


const express = require('express');
const app = express();

app .use(express.json())

let course=[
    {id:1, name:'javaScript'},
    {id:2, name:'java'},
    {id:3, name:'python'},
    {id:4, name:'c'}
];

app.get('/',(req,res)=>{
    res.send(course)
})

// -----------How to update the file---------

// app.put('/cours/:coursnmae',(req,res)=>{
//     let courses  = course.find(courses => courses.name === req.params.coursnmae);
//     if(!courses){res.send("the course you looking fro does not exist");}
//     courses.name=req.body.name;
//     res.send(courses);
// })

//------------Hoe to delete the particular data---------


// app.delete("/cours/:username",(req,res)=>{
//     let updatecourse = course.filter(cours=> cours.name !== req.params.username);
//     course  =  updatecourse;
//     res.send(updatecourse);
// })

app.delete('/cours/:id',(req,res)=>{
    let courses  = course.find(courses => courses.id === parseInt(req.params.id));
    if(!courses)res.send("the course you looking fro does not exist");
    let index = course.indexOf(courses);
    course.splice(index,1);
    res.send(courses);
})

app.listen(3000,()=>console.log(`${3000}running `));