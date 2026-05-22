
import express from "express"
import http from "http"
import {Server} from 'socket.io'

const app = express()

const server = http.createServer(app)
const io = new Server(server)

let users = []

app.use(express.static("public"))

io.on("connection", (socket) => {
    console.log("user :", socket.id);


    socket.on("message", (message) =>{
    console.log("user ny message bhejha hai..", message);

    io.emit("message", message)

    })


      socket.on("joined-user", (userName) => {
        console.log(`${userName} joined chat`);

        users.push({
            id:socket.id,
            userName 
        })
        
        console.log(users);
        
        io.emit("online-users", users.length)
    })

    socket.on("disconnect", () => {
users = users.filter((user) => user.id !== socket.id)
    io.emit("online-users", users.length)
    })



    
    
    
})


server.listen(3000, () => {

    console.log("server is listenting on port", 3000);
    
})