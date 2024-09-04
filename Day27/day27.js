var http=require("http")
var fs=require("fs")
var url=require("url")

http.createServer((req,res)=>{
    var q=url.parse(req.url,true)

    if(q.pathname==="/"){
        res.write("Welcome")
        res.end()
    }
    else if(q.pathname==="/signup"){
        fs.readFile("day27.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==="/signupaction"){
        console.log(q.query)
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("Login Successfull")
        res.write("<h2>"+q.query.name+ "</h2>")
        res.end()
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("Page Not Found")
        res.end()
    }
    
}).listen(2000,()=>{
    console.log("Server is running..")
})