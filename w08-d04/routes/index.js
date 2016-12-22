const express = require('express');
const router = express.Router();

const path = require('path');
// Set default statuc assets folder
router.use(express.static(path.join(__dirname, 'public')));

// Render our index.html page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// Render shows page
router.get('/shows/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'shows.html'));
});

module.exports = router;
