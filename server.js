'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
//const routes = require('./routes/index.js');

// get root route
app.get('/', (req, res) => {
  res.send('Server Running');
});

// GET new note form
app.get('/notes/new', (req, res) => {
  res.render('new-note')
});

// POST new note
app.post('/notes', (req, res) => {
  console.log(req.body);
  res.redirect('/');

});

//server listening on port..
app.listen(PORT, () => {
  console.log(`Evernode server running on port: ${PORT}`);
});
