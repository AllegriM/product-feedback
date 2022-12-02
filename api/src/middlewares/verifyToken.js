const jwt = require('jsonwebtoken')
const config = require('../config')
const pool = require('../db')

const verifyToken = async (req, res, next) => {

    const token = req.headers["authorization"]
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Authorization token needed!" })
    }

    const decoded = jwt.verify(token, config.secret)

    const user = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.id])

    if (user.rows[0].length) {
        return res.status(404).json({ message: "No user found with that ID!" })
    }

    next()
}


module.exports = {
    verifyToken
}
