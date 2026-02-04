const http=require('http');
const myServer=http.createServer((req,res)=>{
    // console.log('server1');
    // res.end('hii this is my first server');

    if(req.url=='/'){
        res.end( "<h1>ABES ENGINEERING COLLEGE</h1> <img src='https://cache.careers360.mobi/media/colleges/social-media/media-gallery/5104/2018/9/14/College%20Building%20ABES%20Engineering%20College%20Ghaziabad_Campus-View.jpg' style='border:5px solid black; border-radius:10px;height:500px;'>")
    }
    else if(req.url=='/about'){
        res.end("<H1>WE ARE STUDENT OF  B.TECH 3RD YEAR</H1>")
    }
     else if(req.url=='/contactus'){
        res.end("<H1>62XXXXXX44</H1>")
    }
     else if(req.url=='/class'){
        res.end("<h1>IT(A)</h1>")
    }
    else{
        res.end('404 Page is not Found')
    }
});

myServer.listen(8000,()=> console.log('server is run'))
