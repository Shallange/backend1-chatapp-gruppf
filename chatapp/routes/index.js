var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chatt', function(req, res, next) {
  res.render('chatt', { page:'chatt',title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { page:'register',title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { page:'log in',title: 'Express' });
});

module.exports = router;
