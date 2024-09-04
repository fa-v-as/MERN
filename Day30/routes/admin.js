var express=require("express")
var router=express.Router()

router.get('/',(req,res,next)=>{
    const admin={
        admin1:{
            name:"shekeeb",
            email:"shekeeb@gmial.com"
        },
        admin2:{
            name:"favas",
            email:"favaspachuz@gmail.com",
        }
    }
    res.render("admin",{admin})
});

module.exports = router;