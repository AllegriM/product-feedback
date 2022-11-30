const { Router } = require('express');
const feedBackRoutes = require('./feedback/feedback.routes')

const router = Router();

router.use('/feedback', feedBackRoutes);

module.exports = router;
