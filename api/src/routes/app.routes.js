const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send({ msg: 'HELLO WORLD' });
});

module.exports = router;
