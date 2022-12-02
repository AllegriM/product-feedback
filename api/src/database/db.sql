CREATE DATABASE productfeedback;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    name VARCHAR(255)
);

-- CREATE TABLE user(
--     id SERIAL PRIMARY KEY,
--     password VARCHAR(255),
--     image VARCHAR(255),
--     name VARCHAR(255),
--     username VARCHAR(255) UNIQUE,
-- );

CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    category VARCHAR(255),
    description VARCHAR(255),
    upvotes INT,
    status VARCHAR(55),
    user_id INT REFERENCES users(id)
);

-- Comments should have id related to the feedback id
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    feedback_id INT REFERENCES feedback(id),
    user_id INT REFERENCES users(id)
);

CREATE TABLE replies(
    id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    replyingTo VARCHAR(255),
    comment_id INT REFERENCES comments(id),        
    user_id INT REFERENCES users(id)
);