require('../db');
const mongoose = require('mongoose');

let CelebrityModel = require('../models/Celebrity.model');

CelebrityModel.insertMany([
  { name: 'Tom Croise', occupation: 'actor', catchPhrase: 'aaaa' },
  { name: 'Beyonce', occupation: 'singer', catchPhrase: 'bbbb' },
  { name: 'Duffy Duck', occupation: 'comedian', catchPhrase: 'cccc' },
])
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error ', err);
    mongoose.connection.close();
  });
