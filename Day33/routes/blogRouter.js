const expres=require("express")
const blogController=require("../controllers/blogController")

const router=expres.Router()

router.post("/blogs",blogController.createBlog)
router.get("/blogs",blogController.getAllBlogs)
router.get("/blogs/:id",blogController.getBlog)
router.put("/blogs/:id",blogController.updateBlog)
router.delete("/blogs/:id",blogController.deleteBlog)

module.exports=router