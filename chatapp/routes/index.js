var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next){
  let db = req.db;
  let collection = db.get('users');

  collection.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
    if(err) {
      console.log(err)
    } else if(user != null) {
      console.log(user);
      res.render('index');
    } else {
      console.log(user);
      res.redirect('/');
    }
  })
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register/new', function(req, res, next){
  let db = req.db;
  let collection = db.get('users');

  collection.insert({
    "username": req.body.username,
    "password": req.body.password
  }, function (err, data){
      if(err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  res.redirect('/');
});



module.exports = router;
