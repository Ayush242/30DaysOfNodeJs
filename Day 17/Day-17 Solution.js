const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/userModel");
const app = express();

mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log("databse connected"))
  .catch((err) => console.log(err));

 

async function addUserToDatabase(user) {
    const newUser = new User({
        username: user.username,
        email: user.email,
    })

    const res = await newUser.save();
    console.log(res);
}

addUserToDatabase({ username: 'john_doe', email: 'john@example.com' })

app.listen(3000, () => console.log("Server is running on port 3000"));
