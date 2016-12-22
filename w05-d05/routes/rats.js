// create a route handler
const router = require('express').Router();

// get the object that we exported from modules/rats
const { ratsDB } = require('../models/rats');

// Set up our routes
router.get('/rats', (req, res) => {
  res.render('rats/index');
});

// On rats/show, use the array res.rats that was created from the ratsDB object
router.get('/rats/show', ratsDB, (req, res) => {
  res.render('rats/show', {
    results: res.rats,
  });
});


module.exports = router;
