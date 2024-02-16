const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();

async function connectToMongoDB(){
    const user = process.env.USER;
    const pass = process.env.PASS;
    try {
        await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.0bsp8lw.mongodb.net/?retryWrites=true&w=majority`);
    } catch (error) {
        console.log(error);
    }
}

connectToMongoDB()
    .then(()=>{
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.log(err);
    })

app.listen(3000 , ( )=> console.log("Port connected"))
// randomTest