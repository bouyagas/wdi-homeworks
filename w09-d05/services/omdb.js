const fetch = require('node-fetch');

function search(req, res, next) {
  console.log(req.params.movie);
  fetch(`http://www.omdbapi.com/?t=${req.params.movie}`)
  .then(r => r.json())
  .then((movieData) => {
    res.movie = movieData;
    next();
  })
  .catch(err => next(err));
}

module.exports = { search };
