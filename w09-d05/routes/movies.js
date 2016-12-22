const router = require('express').Router();

const moviesDB = require('../models/movies');

// Get all movies
router.get('/', moviesDB.getSavedMovies, (req, res) => {
  console.log('get all movies');
  res.json(res.movies);
});

// Save movie to movieAPI
router.post('/', moviesDB.addMovie, (req, res) => {
  console.log('Movie added!');
});

// Delete a specific movie
router.delete('/:id', moviesDB.deleteMovie, (req, res) => {
  console.log('Movie has been deleted!');
});

module.exports = router;
