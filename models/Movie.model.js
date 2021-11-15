const { Schema } = require('mongoose');
const mongoose = require('mongoose');
require('./Celebrity.model');

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Celebrity',
    },
  ],
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = MovieModel;
