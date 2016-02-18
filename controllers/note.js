'use strict'
const Note = require('../models/note.js');

// get all notes
module.exports.index = (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) throw err;
    res.render('notes-index', {
      notes: notes
    });
  }).sort({title: 1});
};

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

    res.redirect('/notes');
  });
};

// edit note
module.exports.edit = (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('new-note', {
      note: note
    });

  });
};

// update note
// module.exports.update = (req, res) => {
//   Note.findOneAndUpdate(query, update, options, callback);
//   res.send('UPDATE');
// };












