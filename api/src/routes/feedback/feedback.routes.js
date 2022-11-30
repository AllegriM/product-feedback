const { Router } = require('express');
const { getAllFeedbacks, getFeedBack, createFeedBack, editFeedBack, deleteFeedBack } = require('../../controllers/suggestions.controller');

const router = Router()

// Get all feedback
router.get('/', getAllFeedbacks)

// Get feedback by id
router.get('/:id', getFeedBack)

// Create feedback
router.post('/', createFeedBack)

// Edit feedback
router.put('/:id', editFeedBack)

// Delete feedback
router.delete('/:id', deleteFeedBack)


module.exports = router