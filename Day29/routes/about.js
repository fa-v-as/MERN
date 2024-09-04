var express=require("express")
var router=express.Router()

router.get('/', function(req, res, next) {
    res.render('about', { name: 'Mohammed Shekeeb', age:22, address:"Malappuram" });
  });
  
  module.exports = router;