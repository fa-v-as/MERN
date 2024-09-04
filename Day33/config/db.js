const mongoose=require("mongoose")

MONGO_URI="mongodb://localhost:27017/Blog"

const mongodb=mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log("Error Connecting to Databse",err)
})

module.exports=mongodb