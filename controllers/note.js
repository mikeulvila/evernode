'use strict'
const Note = require('../models/note.js');

// new note form
module.exports.newNote = (req, res) => {
  res.render('new-note', {
    title: 'New Note'
  })
};

// show note
module.exports.show = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('show-note', {
      note: note
    });
  })
};

// create note
module.exports.create = (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log('note: ', note);
    res.redirect(`/notes/${note._id}`);
  });
};

// delete note
module.exports.destroy = (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) throw err;

    res.send('Destroyed!');

  });

};


