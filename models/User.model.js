const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required.'],
			unique: true,
			lowercase: true,
			trim: true,
		},
		username: {
			type: String,
			unique: true,
			required: [true, 'Username is required.'],
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required.'],
		},
		avatar: String,
		userType: {
			type: String,
			enum: ['user', 'superUser', 'admin'],
		},
		favourite: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
	},
	{
		timestamps: true,
	}
);

const User = model('User', userSchema);

module.exports = User;
