const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/userModel');


const app = express();


mongoose.connect(process.env.CONNECTION_STRING) 

async function averageAgeOfUsers(req, res){
    const result = await User.aggregate([
        {
          $group: {
            _id: null,
            averageAge: { $avg: '$age' }  
          }
        }
      ]);
    
      const averageAge = result.length > 0 ? result[0].averageAge : 0;
    
      res.send({
        averageAge
      });
}

app.get('/averageAge', averageAgeOfUsers);

app.listen(3000, () => console.log('Server is running on port 3000'));