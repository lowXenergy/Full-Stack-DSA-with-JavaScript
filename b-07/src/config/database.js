const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI )//If we have't created database then this will create a database automatically and connect to it.
    .then(()=>{
        console.log("Connected to db...");
    })
}

module.exports = connectToDb