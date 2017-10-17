\c product_dev;

CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price int,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address1 VARCHAR(50),
    address2 VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    county VARCHAR(5),
    zipcode VARCHAR(5),
    phone VARCHAR(10),
    date DATE
);

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS user_product_order (
    user_id VARCHAR(50) REFERENCES users (id) ON DELETE CASCADE,
    product_id int REFERENCES product (id) ON DELETE CASCADE,
    order_id int REFERENCES orders (id) ON DELETE CASCADE,
    qty int,
    PRIMARY KEY (user_id, product_id, order_id)
);