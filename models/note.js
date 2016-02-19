'use strict'

const mongoose = require('mongoose');

// model
module.exports = mongoose.model('notes', mongoose.Schema({
  title: String,
  text: String,
  category: {type: mongoose.Schema.Types.ObjectId,
             ref: 'categories'}
}));
