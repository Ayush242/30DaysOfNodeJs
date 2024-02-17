const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;