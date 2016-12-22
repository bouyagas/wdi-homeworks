/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* set up the Rats and Restuarants DB */

const express               = require('express');
const logger                = require('morgan');


const homeRoute             = require('./routes/home');
const ratRoute              = require('./routes/rats');
const restaurantRoute       = require('./routes/restaurants');

const app                   = express();
const PORT                  = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// set up logging so that we can see what's happening
app.use(logger('dev'));

app.listen(PORT, () => console.log('server up and running on port ', PORT));


app.use('/', homeRoute);
app.use('/', ratRoute);
app.use('/', restaurantRoute);

app.use(express.static('public'));

