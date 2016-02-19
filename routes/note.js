'use strict'

const express = require('express');
const router = express.Router();
const Note = require('../models/note.js');

// controller
const ctrl = require('../controllers/note.js');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    .exec((err, note) => {
      if (err) throw err;

      req.note = note;
      next();
  });
});

// GET all notes
router.get('/notes', ctrl.index);

// POST new note
router.post('/notes', ctrl.create);

// GET new note form
router.get('/notes/new', ctrl.newNote);

//GET show note
router.get('/notes/:id', ctrl.show);

// DELETE note
router.delete('/notes/:id', ctrl.destroy);

// UPDATE note
router.put('/notes/:id', ctrl.update);

// EDIT note
router.get('/notes/:id/edit', ctrl.edit);

module.exports = router;

