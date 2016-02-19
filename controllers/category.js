'use strict'
const Category = require('../models/category.js');

module.exports = {
  // get all categories
  index (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;
      res.render('categories-index', {
        categories: categories,
        title: 'Categories'
      });
    }).sort({title: 1});
  },

  // new category form
  newCategory (req, res) {
    res.render('new-category', {
      title: 'New Category'
    })
  },

  // show category
  show (req, res) {
    res.render('show-category', {
      category: req.category
    });
  },

  // create category
  create (req, res) {
    Category.create(req.body, (err, category) => {
      if (err) throw err;
      console.log('category: ', category);
      res.redirect('/categories');
    });
  },

  // delete category
  destroy (req, res) {
    req.category.remove((err) => {
      if (err) throw err;

      res.redirect('/categories');
    });
  },

  // edit category
  edit (req, res) {
    res.render('new-category', {
      category: req.category
    });
  },

  // update category
  update (req, res) {
    req.category.update(req.body, (err) => {
        if (err) throw err;

        res.redirect(`/categories/${req.category._id}`);
      }
    );
  }
};

