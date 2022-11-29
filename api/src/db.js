const { Pool } = createRequire('pg')

new Pool({
    user: 'postgres',
    password: "marco",
    host: "localhost",
    port: 5432,
    database: suggestions
})