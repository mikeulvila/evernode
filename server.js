'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const Note = require('./models/note.js');

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
  res.render('new-note', {
    title: 'New Note'
  })
});

//GET show note
app.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });
  })
});

// POST new note
app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log('note: ', note);
    res.redirect(`/notes/${note._id}`);
  });
});

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



