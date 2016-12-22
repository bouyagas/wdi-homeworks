const express = require('express');
const logger = require('morgan');

const data = require('./sightings.json');

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.listen(port, () => console.log('Express has been born!'));

app.set('view engine', 'ejs');

app.set('views', 'views');


app.get('/', (req, res) => {
  res.render('index', {
    h1: 'The Truth is out there',
    h2: 'How to uncover it...',
    h3: 'Enter the query parameters into the address bar by filtering State, Shape, or City.',
    li1: 'localhost:3000/sightings?state=**STATE NAME GOES HERE(ex. MA)**',
    li2: 'localhost:3000/sightings?shape=**SHAPE NAME GOES HERE(ex. Fireball)**',
    li3: 'localhost:3000/sightings?city=**CITY NAME GOES HERE(ex. Staten+Island)**',
    data: '',
    state: '',
    city: '',
    shape: ''
  });
});


app.get('/sightings', (req, res) => {
  const state = req.query.state;
  const city = req.query.city;
  const shape = req.query.shape;
  res.render('index', {
    data: data,
    state: state,
    city: city,
    shape: shape,
    h1: '',
    h2: '',
    h3: '',
    li1: '',
    li2: '',
    li3: '',
  });
});

const filterByAll = sightings.forEach

