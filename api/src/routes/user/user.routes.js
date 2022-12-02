const { Router } = require('express');
const { signUp, signIn } = require('../../controllers/user.controller')

const router = Router();

// Register user
router.post('/signup', signUp);
// SignIn user
router.post('/signin', signIn);

module.exports = router;
