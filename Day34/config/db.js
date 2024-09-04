const mongoose=require("mongoose")

MONGO_URI="mongodb://localhost:27017/User"

const mongodb=mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database connected sucessfully..!")
}).catch((err)=>{
    console.log("Error connecting to database",err)
})

module.exports=mongodb