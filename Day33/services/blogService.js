const Blog=require("../models/blogModel")

const createBlog=async(blogData)=>{
    const blog=new Blog(blogData)
    return await blog.save()
}

const getAllBlogs=async()=>{
    return await Blog.find()
}

const getBlog=async(id)=>{
    return await Blog.findById(id)
}

const updateBlog=async(id,blogData)=>{
    return await Blog.findByIdAndUpdate(id,blogData,{new:true})
}

const deleteBlog=async(id)=>{
    return await Blog.findByIdAndDelete(id)
}

module.exports={createBlog,getAllBlogs,getBlog,updateBlog,deleteBlog}