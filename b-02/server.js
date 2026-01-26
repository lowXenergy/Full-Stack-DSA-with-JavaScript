const express = require("express");

const app = express(); //sereve instance created

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/about',(req,res)=>{
    res.send("the ab out page");
})

app.get('/homeNotPage',(req,res)=>{
    res.send("This is home not page");
})
app.listen(3000); //server started
