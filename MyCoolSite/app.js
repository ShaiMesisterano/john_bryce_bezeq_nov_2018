var express = require('express');
var modelsRouter = require('./routes/models');

var app = express();

app.use('/models', modelsRouter);

module.exports = app;
