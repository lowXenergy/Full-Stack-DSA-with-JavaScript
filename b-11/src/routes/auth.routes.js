const express= require("express")
const userModel=require("../models/user.models")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body

    const isUserAlreadyExist=await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"email already exist"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name,email,password:hash
    })

    const token = jwt.sign({
        id:user._id,//user unique data
        // email:user.email
    },
    process.env.JWT_SECRET,{expiresIn:"1h"}
)

res.cookie("token",token)

    res.status(201).json({
        message:"User registered",
        user:{
            name:user.name,
            email:user.email
        },
        token
    })
})

authRouter.get('/get-me',async (req,res) => {
    
    const token = req.cookies.token

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    console.log(decoded)

     const user = await userModel.findById(decoded.id)

     res.json({
        name:user.name,
        email:user.email
     })

})

authRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"User not found."
        })
    }

    const isPasswordmatch = user.password === crypto.createHash("md5").update(password).digest("hex")

    if(!isPasswordmatch){
        return res.status(401).json({
            message:"Incorrect password.."
        })
    }

    const token = jwt.sign({
        id:user._id
    },
    process.env.JWT_SECRET,{expiresIn:"1h"}
)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"User loggedIn successfully..",
        user:{
        name:user.name,
        email:user.email
        }
        
    })

})

module.exports= authRouter