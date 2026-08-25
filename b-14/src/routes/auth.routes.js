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

authRouter.get("/find",async(req,res)=>{
    const {email}=req.body
    // const email = req.params.email // Tried it and i need to change the route to /find/:email to use this
    // const email = req.query // Tried it and i need to change the route to /

    console.log(email)
    const user = await userModel.findOne({email}).explain("executionStats");// This will give you the execution stats of the query, which can help you understand how the query is being executed and if there are any performance issues. It will give "stage": "COLLSCAN" when the query is not using an index and is scanning the entire collection. If you see this, it means that the query is not optimized and you should consider adding an index on the email field.

    console.log(JSON.stringify(user, null, 2));// stringify console output readable format. null → no custom replacer 2    → indentation of 2 spaces. JSON.stringify() is not required for explain() to work.

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        message:"User found successfully",
        user
    })
})

authRouter.get("/find-user/:username/:age", async (req, res) => {
    const { username, age } = req.params;

    const user = await userModel
        .findOne({
            username,
            age: Number(age)
        })
        .explain("executionStats");


    res.status(200).json({
        message: "Execution plan",
        user
    });
});

// Test compound index order
authRouter.get("/find-username/:username", async (req, res) => {
    const { username } = req.params;

    const result = await userModel
        .find({ username })
        .explain("executionStats");

    res.json(result);
});

module.exports = authRouter