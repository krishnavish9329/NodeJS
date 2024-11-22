//-------------------------------------------

//------Managing Router------------------------

const express = require('express');
const mongoose =require('mongoose');

const Router = express.Router();




mongoose.connect('mongodb://127.0.0.1:27017/learningPlatform')
.then(()=> console.log('connection is successfull'))
.catch(err=>console.log(`coundn't connect to mongodb - `,err));

//--- DATA validation with JOI
const Joi = require('joi');

const categorySchema = mongoose.Schema({
    name:{type:String,required:true, minlength:3,maxLength:30}    
})
const Category = mongoose.model('Category', categorySchema);

Router.get('/api/categories', async(req,res)=>{
    let categories =await Category.find();
    res.send(categories)
})

Router.post('/api/categories', async (req, res) => {
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const category = new Category({
      name: req.body.name
    });
  
    await category.save();
    res.send(category);
  });





Router.put('/api/categories/:id',(req,res)=>{
    const category= Category.find(c=>c.id===parseInt(req.params.id));
    if(!category)return res.status(404).send("the category with give Id was not found");

    category.name=req.bady.name;
    res.send(category);
});

// Router.delete('/api/categories/:id',(req,res)=>{
//     const category= Category.find(c=>c.id===parseInt(req.params.id));
//     if(!category)return res.status(404).send("the genre with give Id was not found");

//     const index=Category.indexOf(category);
//     cotegories.splike(index,1);
//     category.name=req.bady.name;
//     res.send(category);
// });

// Router.get('/api/categories/:id',(req,res)=>{
//     const category= Category.find(c=>c.id===parseInt(req.params.id));
//     if(!category)return res.status(404).send("the genre with give Id was not found");

//     res.send(category);
// });


function validateData(category) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(category);
}
// function validateData(category)
// {
//     const schema = {name : Joi.string().min(3).required()}

//     return Joi.validata(category, schema)
//}

module.exports=Router;