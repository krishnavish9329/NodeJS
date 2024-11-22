//--------E-Learning Platform---------------

const express = require('express');

// const mongoose =require('mongoose');

const categories = require('./routes/categories.js');


const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/learningPlatform')
// .then(()=> console.log('connection is successfull'))
// .catch(err=>console.log(`coundn't connect to mongodb - `,err));

app.use(express.json());
app.use(categories);

app.listen(3000,()=>{`listening on port 3000 `});