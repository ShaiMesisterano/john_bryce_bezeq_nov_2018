var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var pictures = [
    'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYqJCM5nbNAk9Z4C3rybPQFic9USLCCrIXejIgInn1L9bdHKu',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE0iXm3ChXIonp7e0SaitdYMCK59OEN4MNQ7nldYAFoxvlp8b'
];

app.use(bodyParser.json());

app.get('/pictures', function(req, res) {
    res.send(pictures);
});

app.get('/pictures/:id', function(req, res) {
    res.send(pictures[req.params.id] || "Picture not found");
});

app.post('/pictures', function(req, res) {
    pictures.push(req.body.url);
    res.send("Success");
});

app.listen(8080, function(){
    console.log('Server is running...');
});