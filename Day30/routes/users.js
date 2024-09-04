var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user={
    name:"shekeeb",
    isActive:false
  }
  res.render("users",{user})
});

module.exports = router;
