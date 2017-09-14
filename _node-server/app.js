var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Word!!! \n');
}).listen(1337, '127.0.0.1');