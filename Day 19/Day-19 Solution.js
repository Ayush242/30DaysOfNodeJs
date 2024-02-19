const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./models/userModel') 

const app = express()

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err))

    
async function addUserWithValidation(user){
    const newUser = await User.create({username: user.username, email: user.email})
    console.log(newUser);
}

addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });

app.listen(3000, () => console.log('Connected to Port'));