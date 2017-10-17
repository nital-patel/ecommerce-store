\c product_dev;

CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price int,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS checkout (
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
    id VARCHAR(50),
    name VARCHAR(300)
);
CREATE TABLE IF NOT EXISTS user_product_order (
    user_id SERIAL PRIMARY KEY,
    product_id int,
    order_id int,
    qty int

);