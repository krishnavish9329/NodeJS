/**
 * ----eight Day-----
 * CURD OPERATION
 * connection with mongooes
 * how to query for document
 * comparision Query Operator
 * Logical Operator
 * update Query
 * Delete Query
 * -------------------------------------
 * Data vailidation in mongoDB
 * Inbuild Data vailidations
 * custom Data vailidations
 * Error vailidations
 */

//------Connectoin with mongooes

const mongooes = require('mongoose')

mongooes.connect('mongodb://127.0.0.1:27017/testDataBase')
.then(()=> console.log('Connection is Successful'))
.catch(err=> console.log("coudlen't connect to mangoDB " + err))


//Sechema

// const courseSechema = new mongooes.Schema({
//     name:String,
//     creator: String,
//     publishData:{type:Date, default:Date.now},
//     ispublishData : Boolean,
//     rating: Number
// })

// const Course = mongooes.model('course', courseSechema)

// async function createcourse()
// {
//     const course = new Course({
//     name : 'c++',
//     creator: 'KKv',
//     ispublishData: true,
//     rating: 3
//     })

//     const result = await course.save()
//     console.log(result)
// }

// createcourse();
//---------------------------------------------


//------how to query for document(show the query)


// async function getCourses(){
//     const result = await Course.find();
//     console.log(result);
// }

// getCourses();
//-------------------------------------------

//-----how to deleted data
// async function deleteCourse(id)
// {
//     const course= await Course.findByIdAndDelete(id);
//     console.log(course);
// }

// deleteCourse('66cdcb096ed758d81a8ce6c3');

//--------------------------------------------

// operetors 
/**
 * there are many operetor in mongoDB 
 * $eq(=)
 * $gt(>)
 * $gte(>=)
 * $lt(<)
 * $lte(<=)
 * $in
 * $
 */

// async function getCourses(){
//     const result = await Course.find({name:{$eq:'javascript'}});
//     console.log(result);
// }

// getCourses();


//----------------------------------------

//---------update query

// async function updateCourses(id){
//     const date = await Course.findById(id);

//     if(!date)return;
    
// date.name = 'python'
// date.rating= 4

// const updateCourses= await date.save()
// console.log(updateCourses);
// }

// updateCourses('66cdd7fb5807cb06951c1ccb');


//-----------------------------------------------------------------

//----------------Data vailidation in mongoDB----------------------

/**
 * when data enter so only one data filled is fullfill & other ia not fullfilled so hear we us DATA VAILIDATION
 */



// const courseSechema = new mongooes.Schema({
//     name:{type:String, required: true},
//     creator: {type:String, required: true},
//     publishData:{type:Date, default:Date.now},
//     ispublishData :{ type:Boolean, require: true},
//     rating: { type:Number, required: true}
// })

// const Course = mongooes.model('newcourse', courseSechema)

// async function createcourse()
// {
//     const course = new Course({
//     name : 'c#',
//     // creator: 'Krishna',
//     // ispublishData: true,
//     // rating: 5
//     })

//     try{
//         course.validate()
        
//         // const result = await course.save()
//         // console.log(result)
//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// }

// createcourse();
//---------------------------------------------------
//-------------Inbuild Data vailidations----------


// const courseSechema = new mongooes.Schema({
//     name:{type:String, required: true, minlength:1,maxlength:200},
//     category:{type:String,
//               required: true,
//               enum:["DSA",'wed', 'mobail','dataScience'] 
//     },
//     creator: {type:String, required: true},
//     publishData:{type:Date, default:Date.now},
//     ispublishData :{ type:Boolean, require: true},
//     rating: { type:Number, required: function(){return this.ispublishData}}
// })

// const Course = mongooes.model('newcourse', courseSechema)

// async function createcourse()
// {
//     const course = new Course({
//     name : 'MOngoDB',
//     //category:"backend", //it's give a error "newcourse validation failed: category: `backend` is not a valid enum value for path `category`."
//     category:"wed",
//     creator: 'Krishna',
//     ispublishData: true,
//     rating: 4.5
//     // rating: 5 //this is inbuild data valadations
//     })

//     try{
//         // course.validate()
        
//         const result = await course.save() //it's give a error "newcourse validation failed: rating: Path `rating` is required."
//         console.log(result)
//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// }

// createcourse();

//----------------------------------------------------

//------------custom Data vailidations

const courseSechema = new mongooes.Schema({
    name:{type:String, required: true, minlength:1,maxlength:200},

    tag :{type:String, validate:{validator:function(tags){tags.length>1}}} ,
    category:{type:String,
              required: true,
              enum:["DSA","wed", 'mobail','dataScience'] 
    },
    creator: {type:String, required: true},
    publishData:{type:Date, default:Date.now},
    ispublishData :{ type:Boolean, require: true},
    rating: { type:Number, required: function(){return this.ispublishData}}
})

const Course = mongooes.model('newcourse', courseSechema)

// async function createcourse()
// {
//     const course = new Course({
//     name : 'MOngoDB',

//     // tags: ['express','mongodb'],
//     category:"wed",
//     creator: 'Krishna',
//     ispublishData: true,
//     rating: 4.5
//     })

//     try{       
//         const result = await course.save() 
//         console.log(result)
//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// }

// createcourse();

//--------------------------------------------------------

//---------------- Error vailidations


async function createcourse()
{
    const course = new Course({
    //name : 'MOngoDB',
    category:"wed",
    creator: 'Krishna',
    ispublishData: true,
    rating: 4.5
    })

    try{       
        const result = await course.save() 
        console.log(result)
    }
    catch(err)
    {
        for(field in err.errors)
        {
            console.log(err.errors[field]);
        }
    }
}
createcourse();