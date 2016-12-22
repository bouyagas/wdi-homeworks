const db = require('../lib/dbConnect.js');

function getSavedMovies(req, res, next) {
  db.any(`SELECT * FROM movies;`)
  .then((movies) => {
    res.movies = movies;
    next();
  })
  .catch(error => next(error));
}

function getOneMovie(req, res, next) {
  db.one(`SELECT * FROM movies
          WHERE id = $1;`
          , [req.params.id])
  .then((movie) => {
    res.movie = movie;
    next();
  })
  .catch(error => next(error));
}

function addMovie(req, res, next) {
  console.log('req body', req.body);
  db.none(`INSERT INTO movies (title, poster, rated, runtime, plot)
           VALUES ($1, $2, $3, $4, $5);`,
           [req.body.title, req.body.poster, req.body.rated, req.body.runtime, req.body.plot])
  .then((movie) => {
    res.movie = movie;
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

function likeMovie(req, res, next) {
  const id = parseInt(req.params.id);
  db.none(`UPDATE movies
           SET likes = likes + 1
           WHERE id = $1;`,
           [id])
  .then(next())
  .catch(error => next(error));
}

function updateTheater(req, res, next) {
  console.log(req.body.theater)
  const id = parseInt(req.params.id);
  db.none(`UPDATE movies
           SET theater = $1
           WHERE id = $2;`,
           [req.body.theater, id])
  .then(next())
  .catch(error => next(error));
}

module.exports = {
  getSavedMovies,
  getOneMovie,
  addMovie,
  deleteMovie,
  likeMovie,
  updateTheater
};
