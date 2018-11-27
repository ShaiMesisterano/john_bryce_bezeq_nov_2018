var express = require('express');
var carModelsRouter = require('./routes/CarModelsRoute');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cars');

var app = express();

app.use('/car_models', carModelsRouter);

module.exports = app;
