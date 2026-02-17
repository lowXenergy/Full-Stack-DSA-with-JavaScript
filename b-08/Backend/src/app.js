const express = require("express");
const newModel=require("./models/note.model");
const noteModel = require("./models/note.model");
const cors=require("cors")
const app = express();
const path=require("path")

app.use(express.json());
app.use(cors())
app.use(express.static("./public"))

app.post("/api/notes",async(req,res)=>{
    const {title,description}=req.body;

    const note=await newModel.create({
        title,description
    })
    res.status(201).json({
        message:"NOTE CREATED SUCCESSFULLY",
        note
    })
})

app.get("/api/notes",async(req,res)=>{
    const notes=await noteModel.find();
    res.status(201).json({
        message:"Notes fetched successfully",
        notes
    })
})

app.delete("/api/notes/:id",async(req,res)=>{
    const id=req.params.id;
    await newModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

app.patch("/api/notes/:id",async(req,res)=>{
    const id=req.params.id;
    const {title,description}=req.body;

    await noteModel.findByIdAndUpdate(id,{title,description})
    res.status(200).json({
        message:"Note updated successfully"
    })
})

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
    // res.sendFile("/Users/dmax/Desktop/Revise2.0/Backend/public/index.html")
})

module.exports= app;