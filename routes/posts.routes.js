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

router.post('/carousel', async (req, res, next) => {
	const { limit, offset } = req.body;
	try {
		const totalQuery = await Post.count();
		if (totalQuery < offset) {
			const carouselPost = await Post.find()
				.populate('creator')
				.skip(offset)
				.limit(limit);
			res.json(carouselPost);
		} else {
			let newSkip = offset % (totalQuery - 1);
			const carouselPost = await Post.find()
				.populate('creator')
				.skip(newSkip)
				.limit(limit);
			res.json(carouselPost);
		}
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;
