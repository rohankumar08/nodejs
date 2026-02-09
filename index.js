// const http=require('http');
// const myServer=http.createServer((req,res)=>{
//     // console.log('server1');
//     // res.end('hii this is my first server');

//     if(req.url=='/'){
//         res.end( "<h1>ABES ENGINEERING COLLEGE</h1> <img src='https://cache.careers360.mobi/media/colleges/social-media/media-gallery/5104/2018/9/14/College%20Building%20ABES%20Engineering%20College%20Ghaziabad_Campus-View.jpg' style='border:5px solid black; border-radius:10px;height:500px;'>")
//     }
//     else if(req.url=='/about'){
//         res.end("<H1>WE ARE STUDENT OF  B.TECH 3RD YEAR</H1>")
//     }
//      else if(req.url=='/contactus'){
//         res.end("<H1>62XXXXXX44</H1>")
//     }
//      else if(req.url=='/class'){
//         res.end("<h1>IT(A)</h1>")
//     }
//     else{
//         res.end('404 Page is not Found')
//     }
// });

// myServer.listen(8000,()=> console.log('server is run'))


//***********************************write and read in sync mode************************** */

// const fs=require('fs');
// // fs.writeFileSync("./it-a.txt","Hello everyone i am the student od ABES Engineering college")
// // fs.writeFileSync("./abes.text","WE are the student of ABES")

// const result=fs.readFileSync("./it-a.txt","utf-8")
// console.log(result)
// console.log(fs.readFileSync("./abes.text","utf-8"))


//*****************************************************read and write in Async mode*************************************** */

const fs=require('fs');
// fs.writeFile("./ad.txt","Code is good",()=>{});
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

//*********************************Append*********************** */

// fs.appendFileSync("./ad.txt",` and i am monotonous`);
// fs.appendFile("./ad.txt"," add by Async with no if else callback",()=>{})
// fs.appendFile("./ad.txt",` by Async method`,(err)=>{
//     if(err){
//         console.log("Error",err);
//     }
// })


//***************************Copy************************************* */

fs.writeFile("./a1.txt","Hello Everyone",()=>{});
fs.writeFile("./a2.txt","",()=>{});
fs.cp("./a1.txt","./a2.txt",()=>{})



