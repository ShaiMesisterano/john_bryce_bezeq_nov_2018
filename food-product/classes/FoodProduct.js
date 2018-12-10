"use strict";
exports.__esModule = true;
var FoodProduct = /** @class */ (function () {
    function FoodProduct(_name, _price, _weight, _isKosher, _manufactor, _expirationDate) {
        this.name = _name;
        this.price = _price;
        this.weight = _weight;
        this.isKosher = _isKosher;
        this.manufactor = _manufactor;
        this.expirationDate = _expirationDate;
    }
    FoodProduct.prototype.getProduct = function () {
        return "name: " + this.name + " \n        price: " + this.price + " \n        weight: " + this.weight + " \n        isKosher: " + this.isKosher + " \n        manufactor: " + this.manufactor + " \n        expirationDate: " + this.expirationDate;
    };
    FoodProduct.prototype.getPriceAndName = function () {
        return "price: " + this.price + "\n        name: " + this.name;
    };
    FoodProduct.prototype.getName = function () {
        return this.name;
    };
    FoodProduct.prototype.setPrice = function (price) {
        if (price > 0) {
            this.price = price;
            return "Price was updated successfully";
        }
        else {
            return "Price must be greater than zero";
        }
    };
    FoodProduct.prototype.moreExpensive = function (otherProduct) {
        if (this.price > otherProduct.price) {
            return this;
        }
        else {
            return otherProduct;
        }
    };
    FoodProduct.prototype.isExpired = function () {
        // if (this.expirationDate < new Date()) {
        //     return false;
        // }
        // else{ 
        //     return true;
        // }
        return this.expirationDate > new Date();
    };
    return FoodProduct;
}());
exports["default"] = FoodProduct;
