const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        minlength: 10,
        validate: [
            {validator: email => email.includes('@'), message: 'Email must include @'}, // no need to return as its an arrow function. Other way: function(value) => return email.includes('@')
            {validator: email => email.includes('.com'), message: 'Email must include .com'}
        ]
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;