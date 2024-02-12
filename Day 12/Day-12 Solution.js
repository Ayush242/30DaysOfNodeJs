const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 1000 * 60,
    max: 2,
    handler: function(req, res, next) {
        res.status(429).send('Too many requests, please try again later');
    }
})

app.use(limiter);


app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('Connected to port 3000'));