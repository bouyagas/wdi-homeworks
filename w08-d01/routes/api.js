const router = require('express').Router();
const aptDB = require('../models/apartments');
const buildingDB = require('../models/buildings');
const tenantDB = require('../models/tenants');
const doormenDB = require('../models/doormen');

/* convenience method for sending */
const sendJSONresp = (req, res) => res.json(res.rows);

// Get information on a specific building
router.route('/buildings/:id')
.get(buildingDB.getOneBuilding, sendJSONresp)
.delete(buildingDB.deleteBuilding, sendJSONresp)

router.route('/buildings/:id/:name')
.put(buildingDB.updateBuilding, sendJSONresp);

// api/buildings returns a json of ALL buildings
router.route('/buildings')
.get(buildingDB.getBuildings, sendJSONresp);


// Get information on a specific apartment
router.route('/apartments/:id')
.get(aptDB.getOneApartment, sendJSONresp)
.delete(aptDB.deleteApt, sendJSONresp);

// api/apartments returns a json of ALL apartments
router.route('/apartments')
.get(aptDB.getApartments, sendJSONresp);


// Get information on a specific tenant
router.route('/tenants/:id')
.get(tenantDB.getOneTenant, sendJSONresp)
.delete(tenantDB.deleteTenant, sendJSONresp);

// api/tenants returns a json of ALL tenants
router.route('/tenants')
.get(tenantDB.getTenants, sendJSONresp);


// Get information on a specific doorman
router.route('/doormen/:id')
.get(doormenDB.getOneDoorman, sendJSONresp)
.delete(doormenDB.deleteDoorman, sendJSONresp);

// api/doormen returns a json of ALL doormen
router.route('/doormen')
.get(doormenDB.getDoormen, sendJSONresp);

module.exports = router;


