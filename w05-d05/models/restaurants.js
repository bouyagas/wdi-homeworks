const { MongoClient } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/rats_to_restaurants';

// module.esports allows us to export this oject to our routes files
module.exports = {
  restaurantsDB: (req, res, next) => {
    // create a new empty object
    const filterObj = {};
    // set query string to a constant
    const qs = req.query;

    // filter query string for valid queries, ignore case
    // The RegExp constructor creates a regular expression object for matching text with a pattern.
    if ('cuisine' in qs) filterObj.cuisine_description = new RegExp(`\\b${qs.cuisine}`, 'i');
    if ('name' in qs) filterObj.dba = new RegExp(`\\b${qs.name}`, 'i');

    // connect to the mongoDB specified above as dbConnection
    // Mongoclient.connect takes in a url and a callback function
    // the fist parameter of our callback function will contain the
    // error object if an error occured, or null otherwise.
    // The second parameter will contain the initialized db object or null if
    // an error occured
    MongoClient.connect(dbConnection, (err, db) => {
      if (err) return next(err);

      // look in our rats collection and find objects matching our filterObj
      // toArray returns an array of all the documents we found
      db.collection('restaurants')
      .find(filterObj)
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // save our array of results to res.rats so we can send to next function
        res.restaurants = data;
        return next();
      });
      return false;
    });
  },
};

