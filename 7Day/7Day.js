/**
 * -----seven day-------
 * the Event loop and everything
 * serial execution of Async code
 * promises in javascript
 * Promises and Async Await
 */


//----the Event loop and everything---
//hear is 3 component
//1)call stack
//2)wed app
//3)ecent queue

//---------serial execution of Async code--

// const { rejects } = require('assert');
// const fs = require('fs');
// const { resolve } = require('path');
// console.log("start time")

// fs.readFile("f1.txt",cd)
// function cd(err,data){
//     if(err){console.log(err)}
//     console.log("f1 data ->"+data)
//     fs.readFile("f2.txt",cd1)
// }
// function cd1(err,data){
//     if(err){console.log(err)}
//     console.log("f2 data ->"+data)
// }

// console.log("end time")

//------promises in javascript-----------

// let mypromise = new Promise(function(resolve,rejects){
//     const a=4;
//     const b=4;
//     setTimeout(()=>{
//         if(a===b){
//             resolve("the value is equal");
//         }
//         else rejects("value was not equal")
//     })
// })

// mypromise.then(function(result){
//     console.log(result)
// })
// mypromise.catch((err)=>{
//     console.log(err)
// })
// console.log(mypromise)

//---Promises and Async Await-----

function placeOrder(drink)
{
    return new Promise (function (resolve,rejects){
        if(drink=="coffee")
        {
            resolve("Order for coffee recieved");
        }else{
            rejects("other order Reject")
        }
    })
}

function ProcessOrder(order){
    return new Promise(function(resolve){
        console.log('order is being Prosessed')
        resolve(`${order} is served`);
    })
}

// placeOrder("coffee").then(function(order){
//     console.log(order)
//     let orderIsProccess =ProcessOrder(order)
//     return  orderIsProccess;
// }).then(function(ProcessOrder){
//     console.log(ProcessOrder)
// }).catch(function(err){
//     console.log(err)
// })

//Async Await---------------------------------

async function serveOrder(){
    try{
        let orderPlace = await placeOrder("coffee")
        console.log(orderPlace)

        let ProsessedOrder =await ProcessOrder(orderPlace)
        console.log(ProsessedOrder)
    }
    catch(err){
        confirn.log(err)
    }
}
serveOrder()