\c product_dev;

CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price int,
  image VARCHAR(255)
);