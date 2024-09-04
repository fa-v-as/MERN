var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("demo.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        }) 
    }
    else if(req.url==="/login"){
        res.write("Login Successful")
        res.end()
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("Page Not Found")
        res.end()
    }
}).listen(5000,()=>{
    console.log("Server is Running...")
})