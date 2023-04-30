const mongoose = require('mongoose');

const billboardSchema = new mongoose.Schema({
	bId: {
		type: Number,
		required: true,
	},
	bannerUrl: {
		type: String,
		required: true,
	},
	logoUrl: {
		type: String,
		required: true,
	},
	gameId: {
		type: Number,
		required: true,
	},
	synopsis: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model(
	'Billboard',
	billboardSchema
);
