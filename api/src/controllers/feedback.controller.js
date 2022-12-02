const pool = require('../db')

const getAllFeedbacks = async (req, res, next) => {
    try {
        const allFeedbacks = await pool.query("SELECT * FROM feedback")
        res.status(200).json({ feedbacks: allFeedbacks.rows })
    } catch (error) {
        next(error)
    }
}

const getFeedBack = async (req, res, next) => {
    const { id } = req.params
    try {
        const feedback = await pool.query("SELECT * FROM feedback WHERE id = $1", [id])
        if (!feedback.rows.length) {
            return res.status(404).json({ message: "Feedback not found! Provide a valid ID" })
        }
        res.status(200).json({ feedback: feedback.rows })
    } catch (error) {
        next(error)
    }
}

const createFeedBack = async (req, res, next) => {
    const { title, category, detail } = req.body
    try {
        const createdItem = await pool.query('INSERT INTO feedback (title, category, detail) VALUES ($1, $2, $3) RETURNING *', [
            title,
            category,
            detail
        ]);
        res.send({ message: createdItem.rows[0] })
    } catch (error) {
        next(error)
    }
}

const editFeedBack = async (req, res, next) => {
    const { id } = req.params
    const { title, category, detail } = req.body
    try {
        const updatedFeedback = await pool.query("UPDATE feedback SET title = $1, category = $2, detail = $3 WHERE id = $4 RETURNING *", [
            title,
            category,
            detail,
            id
        ])
        if (!updatedFeedback.rowCount) return res.status(404).json({ message: "Feedback not found! Provide a valid ID" })
        return res.status(200).json({ feedback: updatedFeedback.rows[0] })
    } catch (error) {
        next(error)
    }
}

const deleteFeedBack = async (req, res, next) => {
    const { id } = req.params
    try {
        const deletedFeedBack = await pool.query("DELETE FROM feedback WHERE id = $1", [id])
        if (!deletedFeedBack.rowCount) {
            return res.status(404).json({ message: "Feedback not found! Provide a valid ID" })
        }
        res.status(200).json({ message: "Feedback deleted succesfully!" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllFeedbacks,
    getFeedBack,
    createFeedBack,
    editFeedBack,
    deleteFeedBack
}