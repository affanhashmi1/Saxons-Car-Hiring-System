var express = require('express');
var router = express.Router();

/* GET customers page. */
router.get('/', function(req, res, next) {
  res.redirect('customers/login')
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('customers/login');
});

/* GET portal page. */
router.get('/portal', function(req, res, next) {
  res.redirect('login');
});

/* POST portal page. */
router.get('/portal', function(req, res, next) {
  res.render('customers/portal', { title: 'Saxons | Portal' });
});

module.exports = router;
