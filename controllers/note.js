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
    Note.findById(req.params.id, (err, note) => {
      if (err) throw err;

      res.render('show-note', {
        note: note
      });
    })
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
    Note.findByIdAndRemove(req.params.id, (err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  },

  // edit note
  edit (req, res) {
    Note.findById(req.params.id, (err, note) => {
      if (err) throw err;

      res.render('new-note', {
        note: note
      });

    });
  },

  // update note
  update (req, res) {
    Note.findByIdAndUpdate(req.params.id,
      req.body, (err, note) => {
        if (err) throw err;

        res.redirect(`/notes/${note._id}`);
      }
    );
  }
};












