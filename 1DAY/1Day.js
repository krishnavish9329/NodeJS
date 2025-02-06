/*
* ---- First day Topic ----
* Global Object
* Modules and modularity
* Introduction of All Node Modules
* Child Process modules
* OS modules
*/

//------Global Object ------

/*NODE :- window object is not exist in NODE js envorment .It exist in browser only  hera is Gobal Object*/

let a = "hello krishna";
console.log(a);

//--------Modules and modularity---------

// every file is a one module;
// 1day_cal--> see this 

let calc = require('./1day_cal');
console.log( calc.operation.additoin(10,4));
console.log( calc.operation.diviton(10,4));

//-----------Introduction of All Node Modules-----------
//there are many type of Module in node js
/*
*   child module
*   os module
*   fs module
*   path module
*   http module
*   url module
*/

//------Child Process modules -------------------

// child process is a node module to creat sub process within a script
// you can perform different tasks within your script by using some method
 
/*such as write in cmp sortcut like 
calc -> to open to calaculeter 
start chrome -> open to chrome
etc
*/

const cp = require('child_process');

//cp.execSync('calc');  // this comdant is open the calculater
//cp.execSync('start chrome');  // this comdant is open the chrome
//cp.execSync('start chrome  [link of wed side]');  // this comdant is open the wedside

//-------OS modules------------------

//OS modules is use to chack and access the Operation Syste .
console.log("os module__________-")

const os = require('os');
console.log(os.platform());
console.log(os.arch())
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.freemem()/(1024*1024))
console.log(os.userInfo())


console.log("----------------------")
console.log(os.cpus()) // it's return information of cpu
console.log(os.networkInterfaces())// it's return information of network

