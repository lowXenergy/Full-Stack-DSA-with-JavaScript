const express = require("express");
const userModel = require("../models/user.model")

const authRouter = express.Router();

// API To register/create user (helpful for manual data entry)
authRouter.post("/register",async(req,res)=>{
    const {email,username,age}=req.body

    console.log(email,username,age)

    const user = await userModel.create({
        email,username,age
    })

    res.status(201).json({
        message:"User created successfully",
        user
    })
})

module.exports = authRouter