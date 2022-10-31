const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');

router.get('/', async (req, res, next) => {
	try {
		const posts = await Post.find().populate('creator');
		res.json(posts);
	} catch (error) {
		res.json(error);
	}
});

router.get('/details/:postId', async (req, res, next) => {
	const { postId } = req.params;
	try {
		const foundFost = await Post.findById(postId).populate('creator');
		res.json(foundFost);
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;
