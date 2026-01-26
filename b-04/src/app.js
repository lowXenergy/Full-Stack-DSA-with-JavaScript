/*
Two main tasks

- Create the server
- Config the server

*/

const express = require("express");


const app = express(); //Server created

app.use(express.json());
const notes=[
    // {
    //     title:"test",
    //     description:"test description"
    // }
]

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    
    res.send("note created...")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    res.send("note deleted successfully")
})

app.patch("/notes/:index",(req,res)=>{

    notes[req.params.index].description = req.body.description;

    res.send("Note updated succesfully")
})
module.exports = app 