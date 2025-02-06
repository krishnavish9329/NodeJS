const { getUser } =require('./../servecis/auth')


//----------------- Authentication----

// async function athenticationUserOnly(req,res,next){
//     const userUid_Token = req.cookies?.Uid;
//     // console.log(userUid+ "----------")
//     if(!userUid_Token) return res.redirect("/signeUP");
//     const result = getUser(userUid_Token); 
//     // console.log(result)
//     if(!result) return res.redirect('/signeUP');
//     req.result = result;
//     // console.log(req.result.Gmail)
//     next()
// }

// -------------------- Authorization header------------------
// async function athenticationUserOnly(req,res,next){
//     const userUid_Token = req.headers["authorization"];
//     console.log(req.headers)
//     console.log(userUid_Token+ "----------")
//     if(!userUid_Token) return res.redirect("/signeUP");
//     const token = userUid_Token.split("Bearer ")[1]; // it's like (Bearer [1246ifj499402])

//     const result = getUser(token); 
//     console.log(result)
//     if(!result) return res.redirect('/signeUP');
//     req.result = result;
//     // console.log(req.result.Gmail)
//     next()
// }

function checkForAuthetication(req,res,next){
    const tokenCookie = req.cookies?.Uid;
    req.user=null;

    console.log(tokenCookie+"--------")
    if(!tokenCookie)  return next();
    
    const token = tokenCookie;
    const user =getUser(token);
    console.log(user + '----')
    req.user = user;

    return next();   
}


function restritTo(roles = []){
    return function(req,res,next){
        if(!req.user ) return res.redirect('/signeUP');
        if(!roles.includes(req.user.role)) return res.end("unauthorized")

            return next()
    }

}

module.exports={
    // athenticationUserOnly
    checkForAuthetication,
    restritTo
}