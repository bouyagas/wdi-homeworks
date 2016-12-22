
const router = require('express').Router();
const path = require('path');

router.get('/', (req,res) => res.sendFile(path.join(__dirname, '../views', 'index.html')));

router.get('/shows/buildings/:id', (req, res) => res.sendFile(path.join(__dirname, '../views', 'shows.html')));

router.get('/shows/buildings/:id/:name', (req, res) => res.sendFile(path.join(__dirname, '../views', 'shows.html')));

router.get('/shows/apartments/:id', (req, res) => res.sendFile(path.join(__dirname, '../views', 'shows.html')));

router.get('/shows/tenants/:id', (req, res) => res.sendFile(path.join(__dirname, '../views', 'shows.html')));

router.get('/shows/doormen/:id', (req, res) => res.sendFile(path.join(__dirname, '../views', 'shows.html')));


module.exports = router;
