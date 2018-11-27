var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var CarModels = require('../models/CarModels');

mongoose.connection.on('connected', function() {
    console.log("Connected!!!");
});

router.get('/', function (req, res, next) {
    CarModels.find({}, function(error, carModels) {
        res.send(carModels);
    } );
    var carModel = new CarModels({ name: "Jeep", origin: "USA", year: "1996" });
    carModel.increaseYears(2);
    carModel.save();
});

module.exports = router;
