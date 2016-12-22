const db = require('../db/db.js');

function getSavedMovies(req, res, next) {
  db.any('SELECT * FROM movies;')
  .then((movies) => {
    res.movies = movies;
    next();
  })
  .catch(error => next(error));
}

function deleteMovie(req, res, next) {
  db.none(`DELETE FROM movies
           WHERE id = $1;`,
           [req.params.id])
  .then(next())
  .catch(error => next(error));
}

function addMovie(req, res, next) {
  db.none('INSERT INTO movies (title, poster) VALUES ($1, $2);',
    [req.body.title, req.body.poster])
  .then((movie) => {
    res.movie = movie;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getSavedMovies,
  deleteMovie,
  addMovie,
};
