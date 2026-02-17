const mongoose=require("mongoose");

const newSchema= new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel=mongoose.model("notes",newSchema);

module.exports=noteModel