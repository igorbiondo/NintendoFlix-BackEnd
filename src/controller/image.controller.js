const model = require('../model/games.model');
const path = require('path');

function getImage(req, res) {
	const imageId = req.params.id;
	const game = model[imageId];
	console.log(imageId);

	if (game) {
		res.sendFile(
			path.resolve(
				__dirname,
				'..',
				'..',
				'data',
				'images',
				`${game.key}.jpg`
			)
		);
	}
}

module.exports = { getImage };
