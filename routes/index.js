var express = require('express');
var path = require('path');
var router = express.Router();
var routes = require('../util/routes');

/* GET home page. */
router.get(routes.HOME, function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
