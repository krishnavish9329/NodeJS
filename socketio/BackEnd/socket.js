const express = require("express")
const { createServer } = require("http")
const path =require("path")
const {Server} = require("socket.io")

const Port = process.env.Port || 3000;

const app = express();
const server1 = createServer(app);
const io = new Server(server1,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    },
});


// Socket.io 

io.on('connection', (socket)=>{
    console.log("a user connected " + socket.id);
    // socket.on("User-message", message =>{
    //     console.log(message);
    //     io.emit('message', message)
    // })

    socket.emit("welcome", "Welcome to chat" );

    socket.on("message",(e)=>
    {
        console.log(e)

        // socket.emit("message", e)
        socket.broadcast.emit("message", e)
    }
    )
})

// app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    // res.sendFile("/public/index.html")
})



server1.listen(Port, ()=>{
    console.log(` server is run at  http:/localhost:${Port}/`)
})


