// const map = new Map() //stateless athantication
 
// function setUser(id, user)
// {
//     // console.log(id +  " setUser "+ user);
//     map.set(id,user);
// }

// function getUser(id)
// {
//     // console.log(map.get(id)+ "------- getUser" )
//     return map.get(id);
// }

//----------------------------------------------------------- statefull athantication

const jwt = require("jsonwebtoken");
const secretKey = "Krishna@Krishna"

function setUser(user)
{
    const payload = {
        _id: user._id,
        name: user.name,
        Gmail: user.Gmail,
        role: user.role
    }
    return jwt.sign(payload,secretKey)
}

function getUser(token)
{
    return jwt.verify(token,secretKey)
}

//--------------------------------------------------------

module.exports=({
    setUser,
    getUser
})