const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


function greetHandler(req, res){
    const name = req.query.name;
    if(name){
        res.send(`Hello, ${name}`);
    } else {
        res.send('Hello, Guest');
    }
}

app.get('/greet', (req, res) => greetHandler(req, res));


app.listen(PORT, () => console.log('server started'));