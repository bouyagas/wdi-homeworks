const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);


function getDoormen(req, res, next) {
  db.any('SELECT * FROM doormen;')
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch(error => next(error));
}

function getOneDoorman(req, res, next) {
  db.one(`SELECT * FROM doormen WHERE id = $1`, [req.params.id])
  .then((data) => {
    res.rows = data;
    console.log(res.rows);
    next();
  })
  .catch(error => next(error));
}

function deleteDoorman(req, res, next) {
  req.body.id = Number.parseInt(req.params.id);

  db.none(`
    DELETE FROM doormen
    WHERE id = $1
    `, [req.body.id])
  .then(() => {
    console.log('Deletion complete!');
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getDoormen,
  getOneDoorman,
  deleteDoorman
};
