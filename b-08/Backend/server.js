require("dotenv").config()
const app= require("./src/app");
const connectToDb=require("./src/config/database");

connectToDb();


app.listen(3000,(req,res)=>{
    console.log("port 3000"); 
})