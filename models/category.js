'use strict'

const mongoose = require('mongoose');

// model
module.exports = mongoose.model('categories', mongoose.Schema({
  title: String
}));
