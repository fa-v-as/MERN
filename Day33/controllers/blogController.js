const blogService=require("../services/blogService")

const createBlog=async(req,res)=>{
    try {
        const blog=await blogService.createBlog(req.body)
        // res.status(201).json(blog)
        res.json({message:"Blog Uploaded Successfully..!"})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const getAllBlogs=async(req,res)=>{
    try {
        const blogs=await blogService.getAllBlogs()
        res.status(200).json(blogs)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const getBlog=async(req,res)=>{
    try {
        const blog=await blogService.getBlog(req.params.id)
        if(blog){
            res.status(200).json(blog)
        }
        else{
            res.status(404).json({message:"Blog Not Found..!"})
        }
    } catch (err) {
        res.status(500).json({message:err.message})
    }   
}

const updateBlog=async(req,res)=>{
    try {
        const updatedBlog=await blogService.updateBlog(req.params.id,req.body)
        if(updatedBlog){
            // res.status(200).json(updatedBlog)
            res.json({message:"Blog Updated Successfully..!"})
        }
        else{
            res.status(404).json({message:"Blog Not Found..!"})
        }
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

const deleteBlog=async(req,res)=>{
    try {
        const deletedBlog=await blogService.deleteBlog(req.params.id)
        if(deletedBlog){
            res.json({message:"Blog Deleted Successfully..!"})
        }
        else{
            res.status(404).json({message:"Blog Not Found..!"})
        }
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

module.exports={createBlog,getAllBlogs,getBlog,updateBlog,deleteBlog}