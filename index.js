var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World v0.0.8</h1>');
  res.end();
}).listen(process.env.PORT || 3000);
