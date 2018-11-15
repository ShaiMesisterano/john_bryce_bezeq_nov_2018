var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.post('/world', function(req, res) {
    res.send('Hello Again!');
});

app.listen(8080);