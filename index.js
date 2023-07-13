var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World v0.0.3 - deployed with eg deploy!');
  res.end();
}).listen(process.env.PORT || 3000);