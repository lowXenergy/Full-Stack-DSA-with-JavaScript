require('dotenv').config()
const { connect } = require('mongoose')
const app = require('./src/app')
const connectToDb = require('./src/config/database')

connectToDb() 
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})