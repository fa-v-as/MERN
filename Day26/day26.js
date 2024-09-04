//Server creation
var http=require("http")
http.createServer((req,res)=>{
    res.write("Hala Madrid")
    res.end()
}).listen(3000)



//Using File System(fs) ie,external file
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.readFile("demo.html",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    })
}).listen(4000)