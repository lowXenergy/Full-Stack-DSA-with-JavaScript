//used b/w api and controller
const jwt = require("jsonwebtoken")

async function identifyUser(req,res,next){
      const token = req.cookies.token;
  if(!token){
        return res.status(401).json({
            message:"Unauthorized access"
        })
    }

    let decoded = null;

    try{

        decoded = jwt.verify(token,process.env.JWT_SECRET)

    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }

    req.user = decoded

    next()//forward the req

}

module.exports = identifyUser