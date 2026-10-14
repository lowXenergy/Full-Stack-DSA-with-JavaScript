import app from "./src/app.js";
import {createServer} from 'http';
import { Server } from "socket.io";

const httpServer = createServer(app)
const io = new Server(httpServer,{});
//io => server 
//socket => Single user
//Socket io is event driven
//on => Listing the event
//emit => fire the event
io.on("connection",(socket)=>{
    console.log("New connection created");

    socket.on("message",(msg)=>{
        console.log("User fired message event")
        console.log(msg)
        // io.emit("abc")
    })
})

httpServer.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

//read socket.emit(), socket.broadcast().emit(),io.emit()