const model = require('../model/games.model');
const path = require('path');

function getImage(req, res) {
	const imageId = req.params.imageId;
	res.sendFile(
		path.resolve(
			__dirname,
			'..',
			'..',
			'data',
			'images',
			`${imageId}.jpg`
		)
	);
}
function getBanner(req, res) {
	const imageId = req.params.imageId;
	res.sendFile(
		path.resolve(
			__dirname,
			'..',
			'..',
			'data',
			'images',
			'billboard',
			`${imageId}.jpg`
		)
	);
}
function getLogo(req, res) {
	const imageId = req.params.imageId;
	res.sendFile(
		path.resolve(
			__dirname,
			'..',
			'..',
			'data',
			'images',
			'billboard',
			`${imageId}.png`
		)
	);
}
module.exports = { getImage, getBanner, getLogo };
