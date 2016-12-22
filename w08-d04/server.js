require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Set default statuc assets folder
app.use(express.static(path.join(__dirname, 'public')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());

// Set up some logging
app.use(logger('dev'));

// Modular routes
const indexRouter = require('./routes/index');

// Import router for our movies api
const moviesRouter = require('./routes/movies');

// Import router for our omdb api
const omdbRouter = require('./routes/omdb');

// Map our routes
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/omdb', omdbRouter);

app.listen(PORT, () => { console.log('Show time!📽')});
