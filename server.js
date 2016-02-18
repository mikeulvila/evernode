'use strict'

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// mongodb connection
//const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');

// routes
//const routes = require('./routes/index.js');


// get root route
app.get('/', (req, res) => {
  res.send('Server Running');
});

//server listening on port..
app.listen(PORT, () => {
  console.log(`Evernode server running on port: ${PORT}`);
});
