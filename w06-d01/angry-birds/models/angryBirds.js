const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

// set up db connection
const dbConnection = 'mongodb://localhost:27017/angry-birds';

// This function will find ALL the birds in our data base
function allTheBirds(req, res, next) {
  // connext to the mongoDb specivided above
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('birds')
    .find()
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // save our array of results to res.birds so we can sent to next function
        res.birds = data;
        return next();
      });
    return false;
  });
}

// Write a function to select one bird
function getBird(req, res, next) {
  const filterObj = {};
  const qs = req.query;

  if ('id' in qs) filterObj.id = parseInt(qs.id);
  if ('species' in qs) filterObj.species = qs.species;
  if ('group' in qs) filterObj.group = qs.group;
  if ('feels' in qs) filterObj.feels = qs.feels;

  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('birds')
    .find(filterObj)
    .toArray((removeErr, doc) => {
      if (removeErr) return next(removeErr);

      res.result = doc;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

function saveFavorite(req, res, next) {
  const favorites = {};

  favortes.name = req.body.name;

  // MongoClient.connect(dbConnection, (err, db) => {
  //   if (err) return next(err);

  //   db.collection('favorites')
  //     .insert(req.body.favorites, (insertErr, result) => {
  //       if (insertErr) return next(insertErr);

  //       res.saved = result;
  //       db.close();
  //       return next();
  //     });
  //   return false;
  // });
  // return false;
  res.favs = favorites;
  return next();
}


function getFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({})
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.favorites = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

// module.exports allows us to export this object to our routes files
module.exports = {
  allTheBirds,
  getBird,
  saveFavorite,
  getFavorite,
};
