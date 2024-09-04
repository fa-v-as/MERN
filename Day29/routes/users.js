var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Mohammed Shekeeb<br>Favas');
});


module.exports = router;