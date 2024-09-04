const express=require("express")
const mongoose=require("mongoose")
const port=3000

MONGO_URI="mongodb://localhost:27017/Portal"
const app=express()
app.use(express.json())

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log("Error connecting to databse",err)
})

const userSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:Number
})
const User=mongoose.model('User',userSchema)


//POST
app.post("/user",async(req,res)=>{
    const user=new User({
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password
    }) 
    try{
        const regUser=await user.save()
        //res.status(201).json(regUser)
        res.json({message:"User Registered successfully..!"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }   
})


//GET ALL
app.get("/user",async(req,res)=>{
    try{
        const users=await User.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


//GET BY ID
app.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.json(user);
        } 
        else {
            res.status(404).json({ message: "User Not Found" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


//UPDATE
app.put("/user/:id",async(req,res)=>{
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(updateUser){
            //res.json(updateUser)
            res.json({message:"User Updated Successfully..!"})
        }
        else{
            res.status(404).json({message:"User Not Found..!"})
        }
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})


//DELETE
app.delete("/user/:id",async(req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        if(deleteUser){
            res.json({message:"User Deleted Succesfully..!"})
        }
        else{
            res.status(404).json({message:"User Not Found..!"})
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})