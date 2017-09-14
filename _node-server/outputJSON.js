var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe
        (res);
    }

    if(req.url === '/api') {
        res.writeHead(200, 'utf8', { 'content-type': 'application/json' });
        var obj = {
            fristName: 'Douglas',
            lastName: 'Brandao'
        };
        res.end(JSON.stringify(obj));
    }
}).listen(1111, '127.0.0.1');