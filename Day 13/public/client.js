const ws = new WebSocket("ws://localhost:3001/websocket");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => ws.send(input.value))


//handling message event
ws.onmessage = function(event) {
    const { data } = event
    console.log(data);
}