/*
*  ----seconde Day Topic----
*   Path module
*   fs(file System) module
*   fs module with DIRECTORY
*   NPM
*   NPM insatallation
*/
//---------Path Module------
// path module is help us to path of specific folder or file
// it's used where we find the path or directory from a specific file or folder
const path = require("path");
let extension_name = path.extname('E:\\ALL PROGRAMMING LANGAUAGE\\Node JS\\NODE JS revetion\\2Day.js');
console.log(extension_name); // it's return the extension of file [NODE - \->\\]
let base_name = path.basename('E:\\ALL PROGRAMMING LANGAUAGE\\Node JS\\NODE JS revetion\\2Day.js');
console.log(base_name); //it's return the base name of file
console.log(__filename); // it's return the file name with directory of current file or folder [Global Object]
console.log(__dirname); // it's return the directory of current file or folder [Global Object]
//-----------------fs (file syatem) module------------------
//fs is use to perform the CURD(creat , update ,read , delete ) operation 
const fs =require('fs');
fs.writeFileSync('t1.txt',"Hello I am first txt file\nt1.txt",);
// it creat a floder and when file is all ready exist so over write the new data
// when use it's comment th file have all ready store privious data will be over write new data
const read_date =fs.readFileSync('t1.txt')
console.log(read_date); // we have got the data in Buffer form so conver to into Sting 
console.log("this is t1.txt data -> "  + read_date) // we concate Buffer data to into String 
fs.appendFileSync('t3.txt',"\nHello I am t1 created by Krishna",)
fs.unlinkSync('t3.txt');
// delete the t3.txt file
//-----------fs with Directory-------------------
//fs. mkdirSync("2 day my Directory") // it's create the new directory
// --let readdir=fs.readdirSync('E:\\ALL PROGRAMMING LANGAUAGE\\Node JS\\NODE JS revetion\\2 day my Directory')
// --console.log(readdir); // it return array of all file name that stay inside the specific Directory
let exist = fs.existsSync('2 day my Directory');
console.log(exist); // it;s return Boolen value  find the dir. exist or not
//fs.rmdirSync('2 day my Directory');
//it's commend delete a specific directory  but first of all make the empty the directory
//------------NPM-----------------
//reat the docs of NPM 
//https://www.npmjs.com/
//------------NPM Installation-----
//open the terminal and run "npm init" to inastallation of nmp package
// run the npm i figlet command then 
var figlet = require("figlet");
figlet("Hello World!\nKrishna Kmar Vishwakarma", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});