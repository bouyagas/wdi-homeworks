/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* set up the Angry Bird  DB */

const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
// const methodOverride = require('method-override');

// Set up home route and angryBird route
const homeRoute      = require('./routes/home');
const angryBirdRoute = require('./routes/angryBirds');
const favoriteRoute  = require('./routes/favorites')

const app            = express();
const PORT           = process.argv[2] || process.env.PORT || 3000;

// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static('./public'));

// set default templating engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.warn('Listening on PORT ', PORT));

// Set up routes
app.use('/', homeRoute);
app.use('/angry-birds', angryBirdRoute);
app.use('/favorite', favoriteRoute);

