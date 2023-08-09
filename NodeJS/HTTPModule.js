// modules are similar to libraries
const http = require('http');
const url = require('url');
const date = require('./DateModule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write(`The data and time are currently: ${date.myDateTime()}`);
    let query = url.parse(req.url, true).query;
    res.write(query.year + " " + query.month);
    res.end();
}).listen(8080);