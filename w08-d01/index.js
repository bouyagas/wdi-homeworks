'use strict';

require('dotenv').config();
const express       = require('express');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
const path          =require('path');

// only load dotenv if we need it
// const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app   = express();
const PORT  = process.argv[2] || process.env.port || 3000;

// set up logger
// app.use(logger(isDev ? 'dev' : 'common'));
app.use(logger('dev'));

// only accept json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

// bring in routes
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));

app.set('view engine', 'html');
app.set('views', 'views');

// generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!')
});

// Let's go!
app.listen(PORT, () => console.log('Server is listening on port ', PORT));
