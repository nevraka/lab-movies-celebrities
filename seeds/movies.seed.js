require('../db');
const mongoose = require('mongoose');

let MovieModel = require('../models/Movie.model');

MovieModel.insertMany([
  {
    title: 'Titanic',
    genre: 'actor',
    plot: 'asd',
    cast: ['619289b550160d735de41a14'],
  },
  {
    title: 'Ghost Busters',
    genre: 'singer',
    plot: 'asd',
    cast: ['619289b550160d735de41a15'],
  },
  {
    title: 'Groundhog Day',
    genre: 'comedian',
    plot: 'asd',
    cast: ['619289b550160d735de41a14'],
  },
])
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error ', err);
    mongoose.connection.close();
  });
