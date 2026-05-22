const socket = io()

console.log("client connected ==>");

let messageInput = document.getElementById("message-input")
let sendBtn = document.getElementById("send-btn")

let usernameInput = document.getElementById("username")
let joinBtn = document.getElementById("join")

let onlineUsers = document.getElementById("onlineUsers")

console.log(messageInput.value);
console.log(sendBtn);







joinBtn.addEventListener("click",() =>{
    let userName = usernameInput.value;

    if(!userName) {
        console.log("please enter a user name");
        
        return 
    }

    socket.emit("joined-user",  userName)


     usernameInput.value = ""


     socket.on("online-users", (totalUsers) => {
        console.log("total users ==>",totalUsers);
        onlineUsers.innerHTML = `Online Users : ${totalUsers}`
        
     })



})

sendBtn.addEventListener("click", () => {
    const message = messageInput.value;


    // console.log("send btn click howaa....", message);
    socket.emit("message", message)


    socket.on("message", (data) =>{
        console.log("server ne messages bhejhy...",data);
        
    })
    
    messageInput.value = ""    
})
