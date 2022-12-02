const { Router } = require('express');
const feedBackRoutes = require('./feedback/feedback.routes')
const userRoutes = require('./user/user.routes')

const router = Router();

router.use('/feedback', feedBackRoutes);
router.use('/user', userRoutes)

module.exports = router;
