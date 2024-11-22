function myMiddlewear(req,res,next){
    console.log("krishna")
    next()

}

function mymid (req,res,next) {
    const time = new Date();
    console.log(time.getDate());
    //console.log('i am first11 middlewear');
    next();
}
module.exports=myMiddlewear
module.exports=mymid;