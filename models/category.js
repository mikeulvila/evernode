'use strict'

const mongoose = require('mongoose');

// model
module.exports = mongoose.model('categories', mongoose.Schema({
  name: String,
  description: String
}));
