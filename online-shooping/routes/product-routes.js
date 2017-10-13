const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/product-controller');

productRouter.get('/', productController.index);

module.exports = productRouter;
