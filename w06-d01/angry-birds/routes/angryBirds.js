const router = require('express').Router();

const dbService = require('../models/angryBirds');


router.get('/', dbService.allTheBirds, (req, res) => {
  res.render('angryBirds', {
    birds: res.birds,
    favorite: res.favorites,
  });
});

router.get('/:id', dbService.getBird, (req, res) => {
  res.render('searchBirds', {
    birds: res.result,
  });
});




module.exports = router;
