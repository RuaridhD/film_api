const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));

router.get('/', function(req, res) {
  res.json({ data: 'Welcome to my website for Film Reviews!'});
});

module.exports = router;
