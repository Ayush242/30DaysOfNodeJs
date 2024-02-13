const WebSocket = require("ws");
const EventEmitter = require("events");
const express = require("express");

const app = express();

const eventEmitter = new EventEmitter();
const ws_server = new WebSocket.Server({ port: 3001});


app.use(express.static("public"));

ws_server.on("connection", function connection(ws) {
    ws.on("message", function message(message) {
        console.log("Sent Message: "+ message);
        ws.send("Message received");
    })
    
})

app.get("/websocket", (req, res) => {
    res.sendFile(__dirname +'/index.html');
})


app.listen(3000, () => console.log("Server is running on port 3000"));