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

Product.order = (orderDetails) => {
    return db.one(
        `
        INSERT INTO orders 
            (email, first_name, last_name, address1, address2, city, state, county, zipcode, phone, date)
        VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
        `,
        [
            orderDetails.email,
            orderDetails.firstname,
            orderDetails.lastname,
            orderDetails.address,
            orderDetails.address2,
            orderDetails.city,
            orderDetails.state,
            orderDetails.county,
            orderDetails.zipcode,
            orderDetails.phone,
            new Date()
        ]
    );
};

Product.insertOrderDetails = (cart, order, user) => {
    const promises = cart.map((cartItem) => {
        return db.one(
            `
            INSERT INTO user_product_order 
                (user_id, product_id, order_id, qty)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *
            `,
            [user.id, cartItem.id, order.id, cartItem.qty]
        );
    });

    return Promise.all(promises);
};

module.exports = Product;
