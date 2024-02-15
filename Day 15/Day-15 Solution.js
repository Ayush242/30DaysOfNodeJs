const express = require('express')

const app = express()

function loggingMiddleware(req, res, next) {
    let timestamp = new Date().toLocaleString();
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Http method: ${req.method}`);
    console.log(`Req. Url: ${req.originalUrl}`);
    console.log(`Request headers: ${JSON.stringify(req.headers)}`);
    console.log(`request body: ${req.body}`);
    next();
}

app.use(loggingMiddleware);

app.get('/', (req,res) => {
})

app.listen(3000, () => console.log('Server is running on port 3000'))