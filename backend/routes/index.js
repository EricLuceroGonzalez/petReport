var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside - index.js');
  res.send('index - Express RESTful API');
  next();
});

module.exports = router;
