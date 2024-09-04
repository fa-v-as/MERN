var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const fruits=["Apple","Orange","Mango","Pineapple","Cherry"]
  res.render('index',{fruits})
});

module.exports = router;
