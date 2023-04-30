const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
	id: {
		type: Number,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	imageUrl: {
		type: String,
		require: true,
	},
	gender: {
		type: String,
		require: true,
	},
	gamePath: {
		type: String,
		require: true,
	},
	synopsis: {
		type: String,
		require: true,
	},
	meta: {
		rank: Number,
	},
	key: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('Game', gamesSchema);
