"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var FoodProduct_1 = require("../classes/FoodProduct");
var products = {};
router.post('/', function (req, res, next) {
    var bodyData = {
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        isKosher: req.body.isKosher,
        manufactor: req.body.manufactor,
        expirationDate: req.body.expirationDate
    };
    var newProduct = new FoodProduct_1["default"](bodyData.name, bodyData.price, bodyData.weight, bodyData.isKosher, bodyData.manufactor, bodyData.expirationDate);
    products[bodyData.name] = newProduct;
    res.send("Added Successfully");
});
router.get('/:name', function (req, res, next) {
    // for (let i=0; i<products.length;i++){
    //   if (products[i].getName() === req.params.name) {
    //     res.send(products[i].getProduct());
    //     break;
    //   }
    // }
    var product = products[req.params.name];
    if (product) {
        res.send(product.getProduct());
    }
    else {
        res.send("Product Not Found");
    }
});
module.exports = router;
