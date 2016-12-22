const router = require('express').Router();
const movieService = require('../services/omdb');


router.get('/:movie', movieService.search, (req, res) => {
  res.json(res.movie);
})



module.exports = router;
