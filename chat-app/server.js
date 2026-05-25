import express from 'express'
import http from 'http'
import { Server } from 'socket.io'


const app = express()
const myServer = http.createServer(app)
const io = new Server(myServer)

app.use(express.static("public"))

let users = []

io.on("connection", (socket) => {
// console.log("user connected :", socket.id);


// message event
socket.on("message", (message) => {
console.log("user ki taraf sai message", message);

io.emit("chat", message)

})

// join user event

socket.on("join-user", (chatJoiner) => {
    users.push({
        id : socket.id,
        username : chatJoiner
    })

    console.log("all users and length.",users.length, users);
    
    io.emit("user-joined", chatJoiner)
    io.emit("online-users", users.length)
})

// typing event

socket.on("typing", (typer) => {
    socket.broadcast.emit("someone-typing", typer)
} )


socket.on("disconnect", () => {
// console.log("user disconnected");

const disconnectedUser = users.find(
   (user) => user.id === socket.id
);

users = users.filter((user) => user.id !== socket.id)

if(disconnectedUser){
    io.emit("user-left", disconnectedUser.username)
}

io.emit("online-users", users.length)



});




})


myServer.listen(3000, () => {
    console.log(`server listening on port 3000`);
})

