const model = require('../model/games.model');
const path = require('path');
function getGames(req, res) {
	res.json(model);
}

function getGame(req, res) {
	const gameId = +req.params.id;
	const game = model[gameId];

	if (game) {
		res.json(game);
	} else {
		res.status(404).json({
			error: 'Game does not exits',
		});
	}
}
function getGameFav(req, res) {
	const gameId = +req.params.id;
	const favoritos = [];
	model.map((game) => {
		game.rank === 5 ? favoritos.push(game) : '';
	});
	res.json(favoritos);
}
function getRom(req, res) {
	const gameId = +req.params.id;
	const gameRom = req.params.rom;
	const game = model[gameId];
	console.log(req.params.rom);

	if (game) {
		res.sendFile(
			path.resolve(
				__dirname,
				'..',
				'..',
				'data',
				`${gameRom}.zip`
			)
		);
	} else {
		res.status(404).json({
			error: 'Game does not exits',
		});
	}
}
function getImage(req, res) {
	const gameId = +req.params.id;
	const game = model[gameId];

	if (game) {
		res.json(game);
	} else {
		res.status(404).json({
			error: 'Game does not exits',
		});
	}
}
function getLoader(req, res) {
	res.sendFile(
		path.resolve(
			__dirname,
			'..',
			'data',
			'webrtc-adapter.js'
		)
	);
}

module.exports = {
	getGames,
	getGame,
	getRom,
	getLoader,
	getGameFav,
};
