const Product = require('../models/product');

module.exports =  {
    create: (req, res) => {
        Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.price,
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
        Product.findAll(req.params.id)
            .then(product => {
                res.json (product)

            })
            .catch(err => {
                console.log(err);
                res.status(500).json({err});
            });
    },


    getProduct(req, res) {
        Product.findOne(req.params.id)
        .then(product => {
            res.json(product);
        });
    }
};


