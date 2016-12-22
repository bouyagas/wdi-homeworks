const express = require('express');
const router = express.Router();

const moviesAPI = require('../models/movies');

// Get all movies
router.get('/', moviesAPI.getSavedMovies, (req, res) => {
  console.log('get working');
  res.json(res.movies);
});

// Save movie to movieAPI
router.post('/', moviesAPI.addMovie, (req, res) => {
  console.log('Movie added!');
});

// Like a movie
router.put('/like/:id', moviesAPI.likeMovie, (req, res) => {
  console.log('You like me!');
});

// Update a theater number
router.put('/theater/:id', moviesAPI.updateTheater, (req, res) => {
  console.log('Theater updated!');
});

// Get specific movie
router.get('/:id', moviesAPI.getOneMovie, (req, res) => {
  console.log('get one movie working');
  res.json(res.movie);
});

// Delete a specific movie
router.delete('/:id', moviesAPI.deleteMovie, (req, res) => {
  console.log('movie has been removed!');
});

module.exports = router;
