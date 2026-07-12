const express= require("express")
const userModel=require("../models/user.models")
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body

    const isUserAlreadyExist=await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"email already exist"
        })//400 or 409
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