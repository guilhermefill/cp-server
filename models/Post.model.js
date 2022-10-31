const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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

const User = model('User', userSchema);

module.exports = User;
