
const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("index.html");

const myServer = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.end(home);
});

myServer.listen(3000,() =>{
    console.log("Server Started at port 3000");
});