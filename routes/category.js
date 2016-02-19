'use strict'

const express = require('express');
const router = express.Router();
const Category = require('../models/category.js');
const Note = require('../models/note.js');

// controller
const ctrl = require('../controllers/category.js');

router.param('id', (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) throw err;

    req.category = category;

    Note.find({category: id}, (err, notes) => {
      if (err) throw err;

      req.category.notes = notes;

      next();
    });
  });
});

// GET all categories
router.get('/categories', ctrl.index);

// POST new category
router.post('/categories', ctrl.create);

// GET new category form
router.get('/categories/new', ctrl.newCategory);

//GET show category
router.get('/categories/:id', ctrl.show);

// DELETE category
router.delete('/categories/:id', ctrl.destroy);

// UPDATE category
router.put('/categories/:id', ctrl.update);

// EDIT category
router.get('/categories/:id/edit', ctrl.edit);

module.exports = router;
