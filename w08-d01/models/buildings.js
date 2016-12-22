const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);

function getBuildings(req, res, next) {
  db.any('SELECT * FROM buildings;')
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch(error => next(error));
}

function getOneBuilding(req, res, next) {
  db.one(`SELECT * FROM buildings WHERE id = $1`, [req.params.id])
  .then((data) => {
    res.rows = data;
    next();
  })
  .catch(error => next(error));
}

function deleteBuilding(req, res, next) {
  req.body.id = Number.parseInt(req.params.id);

  db.none(`
    DELETE FROM buildings
    WHERE id = $1
    `, [req.body.id])
  .then(() => {
    console.log('Deletion complete!');
    next();
  })
  .catch(error => next(error));
}

function updateBuilding(req, res, next) {
  req.body.id = Number.parseInt(req.params.id);
  console.log('heyyy')
  console.log(req.bodyname);

  db.none(`
    UPDATE buildings
    SET name = 'Falala'
    WHERE id = $2
    `, [req.query.name, req.body.id])
  .then(() => {
    console.log('Update complete!');
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getBuildings,
  getOneBuilding,
  deleteBuilding,
  updateBuilding
}
