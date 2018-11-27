var express = require('express');
var mongo = require('mongodb');
var router = express.Router();
var modelsData = require('../resources/modelsData');

var MongoClient = mongo.MongoClient;
var dbUrl = "mongodb://127.0.0.1:27017";



MongoClient.connect(dbUrl, function (error, db) {
  if (error) {
    console.error(error)
    return;
  };

  var carsDB = db.db('cars');
  var collection = carsDB.collection('models');
  router.get('/', function (req, res, next) {
    collection.find().toArray(function (error, result) {
      // var data = [];
      // result.forEach(function (model) {
      //   if (model.year > 2000) {
      //     data.push(model);
      //   }
      // })
      // res.send(data);
      res.send("<pre>" + JSON.stringify(result, null, 4) + "</pre>");
    });
  });
  router.post('/', function (req, res, next) {
    collection.insertOne({ name: "Alpha", origin: "Italy", blahblah: "ldskafjlsdjfllsd" });
    res.send('Added to collection');
  });
  router.delete('/', function (req, res, next) {
    collection.deleteOne({ name: "Alpha", origin: "Italy" });
    res.send('Deleted from collection');
  });
  router.put('/', function (req, res, next) {
    collection.updateOne({ name: "Volvo"} , {$set: {name: "New Volvo"}});
    res.send('Update to collection');
  });
});

module.exports = router;
