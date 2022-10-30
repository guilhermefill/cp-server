const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.json('this gets posts');
});

module.exports = router;
