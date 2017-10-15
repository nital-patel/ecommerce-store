const Product = require('../models/product');

let fakeProducts = [];

function dummyProducts() {
    const faker = require('faker').commerce;
    const lorem = require('faker').lorem;
    fakeProducts = [];
    for (var i=0; i< 10; i++ ) {
        fakeProducts.push({
            name: faker.productName(),
            price: faker.price(),
            image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/github_mug_stickers-53_1024x1024.jpg?v=1489593460',
            id: i + 1001
        });
    }
}

module.exports =  {
    create: (req, res) => {
        Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image
        })
        .then(product => {
            res.json({
                message: 'ok',
                data: product,

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
    },
    getProducts(req, res) {
        dummyProducts();
        res.json(fakeProducts);
    },
    getProduct(req, res) {
        if (fakeProducts.length === 0) {
            dummyProducts();
        }

        const data = fakeProducts.find((el) => el.id == req.params.id) || {};
        res.json(data);
    }
};