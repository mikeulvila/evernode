'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('logs',
  mongoose.Schema({
    userAgent: String,
    route: String,
    verb: String
  })
);
