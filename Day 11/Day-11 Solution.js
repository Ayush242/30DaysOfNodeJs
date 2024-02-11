const jwt = require('jsonwebtoken')
const express = require('express');

const app = express();

const secret_key = 'abcd1234';

let token = jwt.sign({name: 'John'}, secret_key);
// console.log(token);

function authenticationMiddleware(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).send('Access Denied');
    }
    try {
        const decoded = jwt.verify(token, secret_key);
        next();
    } catch (error) {
        res.status(401).send('Invalid Token');
    }

}

app.get('/', authenticationMiddleware, (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => console.log('Connected to port 3000'));