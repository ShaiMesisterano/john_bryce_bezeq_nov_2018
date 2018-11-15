var http = require('http');
var request = require('request');

http.createServer(function(req, res) {
  request('https://www.google.com', function (error, response, body) {
    res.end(body);
  });
}).listen(8080);
