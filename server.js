'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// method override
app.use(methodOverride('_method'));

// routes
const note = require('./routes/note.js');

// get root route
app.get('/', (req, res) => {
  res.send('Server Running');
});

// use routes
app.use(note);

// wrap listen in mongoose callback to make sure mongo is connected
mongoose.connect('mongodb://localhost:27017/evernode');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected to database
  //start server
  app.listen(PORT, () => {
    console.log(`Evernode server running on port: ${PORT}`);
  });
});



