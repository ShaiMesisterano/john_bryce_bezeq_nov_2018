var express = require('express');

var app = express();

app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.post('/world', function(req, res) {
    res.send('Hello Again!');
});

app.listen(8080);