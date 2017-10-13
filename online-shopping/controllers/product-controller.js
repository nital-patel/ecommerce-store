module.exports =  {
    index(req, res) {
        const productController = {};
        const faker = require('faker').commerce;
        const fakeProducts = [];

        for (var i=0; i< 10; i++ ) {
            fakeProducts.push({
                name: faker.productName(),
                price: faker.price(),
                description: faker.productAdjective(),
                color: faker.color()
            });
        }

        res.json(fakeProducts);
    }
};