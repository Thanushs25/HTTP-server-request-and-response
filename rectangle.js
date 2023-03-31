const http = require('http');
url = require('url');
http.createServer((req,res)=> {
    console.log(req.url);
    var q = url.parse(req.url,true).query;
    console.log(q);
    console.log(q.r1);
    var l = Number(q.r1);
    var b = Number(q.r2);
    var area = l*b;
    res.write("Area of the rectangle is : "+ area);
    res.end();
}).listen(8080);