// This file defines an HTTP API server using Express.js and connects it to your MongoDB model.
const express = require("express");
// This loads the Express library, which is used to:
// create a web server
// define routes (URLs)
// handle requests and responses

const noteModel=require("./models/notes.model");
// This imports the model you created with Mongoose.
// It gives this file access to database operations such as:
// noteModel.create()
// noteModel.find()
// noteModel.deleteOne()

const app = express();
app.use(express.json());
// This line tells Express:
// “Whenever a request contains JSON in the body, automatically parse it and store it in req.body.”
// Without this, req.body would be undefined

app.post("/notes",async(req,res)=>{
    const {title,description}=req.body;
// This uses destructuring to get fields directly from JSON:
// Equivalent to:
// const title = req.body.title
// const description = req.body.description

      const note = await noteModel.create({
// This does three operations internally:
// Creates a new document object
// Validates it against the schema
// Saves it to MongoDB

        title,description
    })

    res.status(200).json({
        message:"note created successfully",
        note
    })
})

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message:"Notes fetched...",
        notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const id=req.params.id
    const notes = await noteModel.findByIdAndDelete(id);
    res.send(200).json({
        message:"note deleted successfully"
    })
})

app.patch('/notes/:id',async (req,res)=>{
    const id=req.params.id;
    const {title,description}=req.body
    const note= await noteModel.findByIdAndUpdate(id,{title,description})
    res.status(200).json({
        message:"note updated successfully",
        note
    })
})

module.exports = app; 

// req → request  (data coming from client to server)
// res → response (data going from server back to client)
// You use async and await in your Express route because database operations in Node.js and Mongoose are asynchronous. That means they do not complete immediately and instead return a Promise.
//Without async/await:
// Node starts DB operation → immediately continues → sends wrong response
// With async/await:
// Node starts DB operation → waits → sends correct response