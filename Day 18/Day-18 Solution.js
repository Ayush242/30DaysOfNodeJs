const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const User = require('./models/userModel')


mongoose.connect(process.env.CONNECTION_STRING)
    .then(() =>console.log('Connected to database'))
    .catch(err => console.log(err));


async function getAllUsers(req, res){
    try{
        const users = await User.find();
        res.send(JSON.stringify(users));
    } catch(err) {
        console.log(err);
    }
}

app.get('/users', (req, res) => getAllUsers(req, res));

app.listen(3000, () => console.log('Server is running on port 3000'));