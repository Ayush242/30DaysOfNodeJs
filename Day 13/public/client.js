const ws = new WebSocket("ws://localhost:3001/websocket");
const button = document.querySelector("button");

button.addEventListener("click", () => ws.send("Hello from client"))

mywsServer.onopen = function() {
    button.disabled = false
}

//handling message event
mywsServer.onmessage = function(event) {
    const { data } = event
    console.log(data);
}