const socket = io()

// console.log("client connected!");

// inputs ==>
let messageInput = document.getElementById("messageInput")
let chatter = document.getElementById("chat-userName")

// btns ==>
let sendBtn = document.getElementById("sendBtn")
let joinBtn = document.getElementById("joinBtn")


// chat list ==>
let list = document.getElementById("messages")


// notifcation ==>
let notify = document.getElementById("notify")

// show online user elem
let showOnlineUsers = document.getElementById("show-online-users")















// server response ==>

socket.on("chat", (chat) => {

    const { message, sender } = chat;

    const li = document.createElement("li")
    li.innerText = `${sender}: ${message}`

    list.appendChild(li)

})


socket.on("user-joined", (user) => {
notify.innerText = `${user} joined chat`
})


socket.on("online-users", (userCount) => {
    console.log("users length is:",userCount);


    showOnlineUsers.innerText = `Online Users : ${userCount}`
})


socket.on("user-left", (leftUser) => {
    notify.innerText = `${leftUser} left chat`
})


socket.on("someone-typing", (typer) => {
    notify.innerText = `${typer} is typing..`

    setTimeout(() => {
 notify.innerText = `Notification`
    },1500)
})

























// event listeners
sendBtn.addEventListener("click", () => {
    // console.log("send btn handler is working...");

    let message = messageInput.value;
    let sender = chatter.value;

    if (!message.trim()) {
        return console.log("please enter a message..")
    }
    if(!sender.trim()){
        return console.log("please enter a name");
        
    }

    socket.emit("message", {
        message,
        sender
    })

    messageInput.value = ""

})


joinBtn.addEventListener("click", () => {
    console.log("join btn handler is working...");

   if(!chatter.value.trim()){
    return console.log("please enter chat joiner name...")
   }

   if(chatter.value){
    socket.emit("join-user", chatter.value)
   }
   

})


messageInput.addEventListener("keypress", () => {

socket.emit("typing", chatter.value)

})