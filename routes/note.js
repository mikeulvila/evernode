'use strict'

const express = require('express');
const router = express.Router();

// controller
const ctrl = require('../controllers/note.js');

// GET all notes
router.get('/notes', ctrl.index);

// GET new note form
router.get('/notes/new', ctrl.newNote);

//GET show note
router.get('/notes/:id', ctrl.show);

// DELETE note
router.delete('/notes/:id', ctrl.destroy);

// POST new note
router.post('/notes', ctrl.create);


module.exports = router;
