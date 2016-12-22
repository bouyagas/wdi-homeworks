const express = require('express');
const logger = require('morgan');

const app = express();

const PORT = process.argv[2] || process.env.port || 3000;

const MongoClient = require('mongodb').MongoClient;

app.use(logger('dev'));

// Let's go!
app.listen(PORT, () => console.warn('server here! listening on', PORT));

const URL = 'mongodb://localhost:3000/monsters';

var vampires = [];
MongoClient.connect(URL, function(err, db) {
  if (err) return
  vampires = db.collection('vampires').find()
});


app.get('/', (req, res) => {
  res.send(vampires);
  console.log(vampires)
})

// render the list of vampires with their name, hair_color, eye_color, dob, loves, location, and gender to the DOM using ejs when the user goes to '/'
