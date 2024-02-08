const express = require('express');

const app = express();

app.use(middleware);


function middleware(req,res,next){
    if(req.query.number > 0) {
        res.status(200).send('Positive number');
    } else {
        res.status(400).send('Bad request');
    }
    next();
}


app.get('/positive', (req, res) => {
    console.log('Working');
});

app.listen(3000, () => console.log('Port 3000 is running'));