let express = require('express');
let router = express.Router();
import FoodProduct from '../classes/FoodProduct';
let products: Object = {};

router.post('/', function (req, res, next) {
  const bodyData = {
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    isKosher: req.body.isKosher,
    manufactor: req.body.manufactor,
    expirationDate: req.body.expirationDate
  }
  const newProduct = new FoodProduct(bodyData.name, bodyData.price, bodyData.weight, bodyData.isKosher, bodyData.manufactor, new Date(bodyData.expirationDate));
  products[bodyData.name] = newProduct;
  res.send("Added Successfully");
});

router.get('/:name', function(req, res, next) {
  // O(n) complexity (using an array)
  // for (let i=0; i<products.length;i++){
  //   if (products[i].getName() === req.params.name) {
  //     res.send(products[i].getProduct());
  //     break;
  //   }
  // }
  // O(1) complexity (using an object)
  const product = products[req.params.name];
  if (req.query.checkExp) {
    res.send(product.expirationDate.isExpired());
  }
  if (product) {
    res.send(product.getProduct());
  }
  else {
    res.send("Product Not Found");
  }
});

module.exports = router;
