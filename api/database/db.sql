CREATE DATABASE productfeedback;

CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    category VARCHAR(255),
    detail VARCHAR(255)
);