var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World v0.0.1 - deployed with engram cloud!');
  res.end();
}).listen(8080);