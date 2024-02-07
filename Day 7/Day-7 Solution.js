const express = require('express');

const app = express();

app.use(requestLoggerMiddleware)

function requestLoggerMiddleware(req, res, next){
    let timestamp = new Date().toLocaleString();
    console.log(`${timestamp} - ${req.method} request received`);
    next();
}

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(3000,() => console.log('Port 3000 is running'));