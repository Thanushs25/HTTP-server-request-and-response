const http = require('http');
url = require('url');
http.createServer((req,res)=> {
    console.log(req.url);
    var q = url.parse(req.url,true).query;
    console.log(q);
    console.log(q.r1);
    var a = Number(q.r1);
    const pi = 3.14;
    var area = (pi)*a*a;
    res.write("Area of the circle is : "+ area);
    res.end();
}).listen(8080);