const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.json('this is the auth route');
});

module.exports = router;
