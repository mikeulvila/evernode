'use strict'

const express = require('express');
const router = express.Router();

// model
const Note = require('../models/note.js');

// controller
const ctrl = require('../controllers/note.js');

// GET new note form
router.get('/notes/new', ctrl.newNote);

//GET show note
router.get('/notes/:id', ctrl.show);

// POST new note
router.post('/notes', ctrl.create);

module.exports = router;
