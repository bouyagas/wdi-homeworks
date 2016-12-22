// create a route handler
const router = require('express').Router();

// get the object that we exported from modules/rats
const { restaurantsDB } = require('../models/restaurants');

// Set up our routes
router.get('/restaurants', (req, res) => {
  res.render('restaurants/index');
});

// On restaurants/show, use the array res.rats that was created from the ratsDB object
router.get('/restaurants/show', restaurantsDB, (req, res) => {
  res.render('restaurants/show', {
    results: res.restaurants,
  });
});


module.exports = router;
