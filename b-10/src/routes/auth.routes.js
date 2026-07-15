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
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
)

res.cookie("jwt_token",token)

    res.status(201).json({
        message:"User registered",
        user,
        token
    })
})

authRouter.post("/protected",(req,res)=>{
    console.log(req.cookies);

    res.status(200).json({
        message:"cookie"
    })
})

//Controller --> All the function that are used when the api request them.
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
    process.env.JWT_SECRET
)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"User loggedIn successfully..",
        user
    })

})

module.exports= authRouter

// Hash has 2 properties:
// 1. Same input = same output
// 2. irreversible