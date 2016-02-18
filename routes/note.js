'use strict'

const express = require('express');
const router = express.Router();

// model
const Note = require('../models/note.js');

// GET new note form
router.get('/notes/new', (req, res) => {
  res.render('new-note', {
    title: 'New Note'
  })
});

//GET show note
router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });
  })
});

// POST new note
router.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log('note: ', note);
    res.redirect(`/notes/${note._id}`);
  });
});

module.exports = router;
