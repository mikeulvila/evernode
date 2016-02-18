'use strict'
const Note = require('../models/note.js');

module.exports = {
  // get all notes
  index (req, res) {
    Note.find({}, (err, notes) => {
      if (err) throw err;
      res.render('notes-index', {
        notes: notes
      });
    }).sort({title: 1});
  },

  // new note form
  newNote (req, res) {
    res.render('new-note', {
      title: 'New Note'
    })
  },

  // show note
  show (req, res) {
    res.render('show-note', {
      note: req.note
    });
  },

  // create note
  create (req, res) {
    Note.create(req.body, (err, note) => {
      if (err) throw err;
      console.log('note: ', note);
      res.redirect(`/notes/${note._id}`);
    });
  },

  // delete note
  destroy (req, res) {
    req.note.remove((err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  },

  // edit note
  edit (req, res) {
    res.render('new-note', {
      note: req.note
    });
  },

  // update note
  update (req, res) {
    req.note.update(req.body, (err) => {
        if (err) throw err;

        res.redirect(`/notes/${req.note._id}`);
      }
    );
  }
};












