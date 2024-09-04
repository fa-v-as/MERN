const express=require("express")
const mongodb=require("./config/db")
const blogRoutes=require("./routes/blogRouter")
const port=4000

const app=express()
app.use(express.json())
app.use("/api",blogRoutes)

app.listen(port,(()=>{
    console.log(`Server running on ${port}`)
}))