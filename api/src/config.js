const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        ssl: true
    },
    dev: {
        user: "postgres",
        password: process.env.DB_DEV_PASSWORD,
        host: "localhost",
        port: 5432,
        database: "productfeedback"
    },
    secret: process.env.DB_SECRET
}

