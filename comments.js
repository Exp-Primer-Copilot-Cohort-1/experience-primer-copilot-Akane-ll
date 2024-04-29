// Create web server
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var url = req.url;
  if (url === '/') {
    fs.readFile('index.html', function (err, data) {
      res.write(data);
      return res.end();
    });
  } else if (url === '/comments') {
    fs.readFile('comments.json', function (err, data) {
      res.write(data);
      return res.end();
    });
  } else {
    res.write('Error 404: Not Found');
    return res.end();
  }
}).listen(8080);