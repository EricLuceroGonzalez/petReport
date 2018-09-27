var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside - postRoute.js');
  res.send('Express RESTful API');
});

module.exports = router;
