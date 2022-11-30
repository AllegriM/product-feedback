const { Client } = require('pg')
const { db } = require('./config')

const client = new Client({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: true
})

module.exports = client