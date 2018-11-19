var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/host-family', function(req, res, next) {
  res.render('host', { title: 'Express' });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Express' });
});

router.get('/programs', function(req, res, next) {
  res.render('programs', { title: 'Express' });
});


module.exports = router;
