const express = require("express");
const apicache = require("apicache");

const app = express();

let cache = apicache.middleware;

app.use(cache("20 seconds"));

app.get('/', (req, res) => {
    res.send(new Date().toLocaleString());
})


app.listen(3000, () => console.log("Server is running on port 3000"));