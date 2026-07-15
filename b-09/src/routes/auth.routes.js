const express= require("express")
const userModel=require("../models/user.models")
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body

    const isUserAlreadyExist=await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"email already exist"
        })//The request is valid, but it conflicts with existing data (e.g., duplicate email, duplicate username, duplicate order ID).
    }

    const user = await userModel.create({
        name,email,password
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


module.exports= authRouter