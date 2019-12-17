var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});
/* GET login page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});


module.exports = router;
