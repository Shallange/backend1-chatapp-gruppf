var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat', function(req, res, next) {
  res.render('chat', { page:'chat',title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { page:'register',title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { page:'log in',title: 'Express' });
});

module.exports = router;
