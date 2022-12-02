const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const signUp = async (req, res, next) => {
    const { username, password, image, name } = req.body
    try {
        const selectedUsername = await pool.query('SELECT username FROM users WHERE username = $1', [username])
        if (!username || !password || !image || !name) {
            return res.status(406).json({ message: "All fields should be completed!" })
        }
        if (selectedUsername.rows.length > 0) {
            return res.status(409).json({ message: "Username already exists!" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPW = await bcrypt.hash(password, salt)
        const saveUser = await pool.query('INSERT INTO users (username, hashedPW, image, name) VALUES ($1, $2, $3, $4) RETURNING *', [
            username,
            hashedPW,
            image,
            name
        ])
        res.status(201).json({ message: "User created successfully", user: saveUser })
    } catch (error) {
        next(error)
    }
}

const signIn = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const userExistence = await pool.query('SELECT * FROM users WHERE username = $1', [username])
        if (!userExistence.rows.length) {
            return res.status(409).json({ message: "Username don't exists!" })
        }
        const user = userExistence.rows[0]
        await bcrypt.compare(password, user.password)
        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        })
        return res.status(202).json({ message: "Sign In successfully!", user, token })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    signUp,
    signIn
}