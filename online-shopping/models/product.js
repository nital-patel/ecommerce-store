const db = require('../db/config');

const Product = {};

Product.create = product => {
    return db.one(
        `
        INSERT INTO product
            (name, price, image, description) 
        VALUES 
            ($1, $2, $3, $4)
        RETURNING *
        `,
        [product.name, product.price, product.image, product.description]
    );
};

Product.findAll = () => {
    return db.query(`SELECT * FROM product`);

};

Product.findOne = (id) => {
    return db.oneOrNone(
        `
        SELECT * FROM product WHERE id = $1
        `,
        [id]
    );

};

module.exports = Product;
