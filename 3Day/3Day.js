/*
 *--------Threed Day-----------
 * All About .gitignore
 * How creat own NPM package & public it.
 * Express
 * Installation of Express 
 */

//----------All about .gigignore-------

//learn git lenguage

//----------sementic version------------

// "dependencies": {
//     "figlet": "^1.7.0"
//   }

//Hear is figlet is a dependency and "^1.7.0" is version 
/**
 * ^ = char charecter (it use to ditect the installation version)
 * 1 = major
 * 5 = minor
 * 2 = patch
 */

//-----------How creat own NPM package & public it-------------

// make the floder and run init command
// run "npm adduser" -- creat accound in npmjs.com 
// then run "npm  login" -- and longin 
// then make A file index.js

//------------Express------------

/**
 * Express is server side (Backend) language 
 * it is actualy is a fremwork of Node
 * Node Js is runtime envorment of js 
 * 
 * FATURE OF EXPRESS
 * 1) fast and rabust application
 * 2) middleware
 * 3) Routing
 */

//--------installation of Express-----

// use npm init --yes 
// then
// npm i express

const express = require('express');

const app =express();
 
app.get('/',(req,res)=>{
    res.send("I'm Krishna");
})
app.listen(3000);