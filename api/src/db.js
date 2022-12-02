const { Pool } = require('pg')
const dbConfig = require('./config')

const pool = new Pool({
    ...dbConfig[process.env.DB_USAGE]
})

module.exports = pool