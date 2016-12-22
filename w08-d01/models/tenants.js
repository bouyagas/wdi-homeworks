const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);


function getTenants(req, res, next) {
  db.any('SELECT * FROM tenants;')
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch(error => next(error));
}

function getOneTenant(req, res, next) {
  db.one(`SELECT * FROM tenants WHERE id = $1`, [req.params.id])
  .then((data) => {
    res.rows = data;
    console.log(res.rows);
    next();
  })
  .catch(error => next(error));
}

function deleteTenant(req, res, next) {
  req.body.id = Number.parseInt(req.params.id);

  db.none(`
    DELETE FROM tenants
    WHERE id = $1
    `, [req.body.id])
  .then(() => {
    console.log('Deletion complete!');
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getTenants,
  getOneTenant,
  deleteTenant
};
