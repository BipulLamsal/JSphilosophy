const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((req,res)=>{
    const parse = url.parse(req.url, true);
    const filename = "__tests__/"+parse.pathname;
    fs.readFile(filename,(err,data)=>{
        if(err)
        {
            console.log(filename)
            res.writeHead(404,{'Content-Type' : 'text/html'});
            return res.end("404 not Found");
        }
        else
        {
            
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.write(data);
            return res.end();
        }

    })
}).listen(8081);
