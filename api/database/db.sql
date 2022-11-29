CREATE DATABASE products;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    title VARCHAR(55) UNIQUE,
    category VARCHAR(55),
    upvotes INT
)