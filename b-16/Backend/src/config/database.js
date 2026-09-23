const mongoose = require("mongoose");


async function connectToDatabase() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch(err=>{
        console.log("Error connecting to Db", err);
        
    })
    
}



module.exports = connectToDatabase;