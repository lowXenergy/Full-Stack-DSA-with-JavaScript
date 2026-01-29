const app = require('./src/app');
const mongoose = require('mongoose'); 

function connectToDb(){
    mongoose.connect("")//Connect our mongodb compass to our cluster and when i added day-6 after .net/ a database is created. Inshort server and database are connected. Never put this uri on github because database will get compromised and copy the string from mongodb compass.
    .then(()=>{
        console.log("Connected to Database");
    })
}

connectToDb();


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})