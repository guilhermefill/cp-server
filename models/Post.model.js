const { Schema, model } = require('mongoose');

const postSchema = new Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		playlistUrl: {
			type: String,
		},
		favouriteCount: {
			type: Number,
		},
		creator: { type: Schema.Types.ObjectId, ref: 'User' },
		mood: { type: [String] },
		distance: Number,
		length: Number,
		location: String,
		text: String,
	},
	{
		timestamps: true,
	}
);

const Post = model('Post', postSchema);

module.exports = Post;
