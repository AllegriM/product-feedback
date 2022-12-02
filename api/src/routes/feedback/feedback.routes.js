const { Router } = require('express');
const { getAllFeedbacks, getFeedBack, createFeedBack, editFeedBack, deleteFeedBack } = require('../../controllers/feedback.controller');
const { verifyToken } = require('../../middlewares/verifyToken');

const router = Router()

// Get all feedback
router.get('/', verifyToken, getAllFeedbacks)

// Get feedback by id
router.get('/:id', verifyToken, getFeedBack)

// Create feedback
router.post('/', verifyToken, createFeedBack)

// Edit feedback
router.put('/:id', verifyToken, editFeedBack)

// Delete feedback
router.delete('/:id', verifyToken, deleteFeedBack)


module.exports = router