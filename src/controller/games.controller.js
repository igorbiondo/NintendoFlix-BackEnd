const db = require('../model/games.model');
const path = require('path');

async function updateGame(req, res) {
	const game = req.body;
	try {
		return res.status(200).json(await db.updateGame(game));
	} catch (err) {
		return res
			.status(400)
			.json({ erro: 'Jogo não encontrado' });
	}
}

async function getAllGames(req, res) {
	try {
		const games = await db.getAllGames();
		return res.status(200).json(games);
	} catch (err) {
		console.log(err);
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

async function getGame(req, res) {
	try {
		return res
			.status(200)
			.json(await db.getGame(req.params.id));
	} catch (error) {
		return res.status(400).json({
			erro: 'Jogo não encontrado',
		});
	}
}

async function getRom(req, res) {
	const { id, key } = req.params;
	const game = await db.getGame(id);
	game.key === key
		? res.sendFile(
				path.resolve(
					__dirname,
					'..',
					'..',
					'data',
					`${key}.zip`
				)
		  )
		: res.status(400).json({ erro: 'Jogo não encontrado' });
}

async function getGameFav(req, res) {
	const favGames = await db.getAllGames({
		meta: { rank: 5 },
	});
	return res.status(200).json(favGames);
}

async function getImage(req, res) {
	try {
		const { key } = await db.getGame(req.params.id);
		return res.sendFile(
			path.resolve(
				__dirname,
				'..',
				'..',
				'data',
				'images',
				`${key}.jpg`
			)
		);
	} catch (err) {
		return res
			.status(400)
			.json({ erro: 'Imagem nao encontrada' });
	}
}

module.exports = {
	getAllGames,
	getGame,
	getLoader,
	getRom,
	updateGame,
	getGameFav,
	getImage,
};
