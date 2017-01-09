var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getSomething', function(req, res, next) {
  res.send('test');
});

module.exports = router;
