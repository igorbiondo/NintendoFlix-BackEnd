const gamesDB = require('./games.mongo');

async function updateGame(game) {
	try {
		return await gamesDB.findOneAndUpdate(
			{
				id: game.id,
			},
			{
				id: game.id,
				name: game.name,
				imageUrl: game.imageUrl,
				gender: game.gender,
				gamePath: game.gamePath,
				synopsis: game.synopsis,
				meta: game.meta,
				key: game.key,
			},
			{
				returnDocument: 'after',
				upsert: true,
				projection: {
					_id: 0,
					__v: 0,
				},
			}
		);
	} catch (err) {
		console.error(`Não pode salvar ${err}`);
	}
}

async function getAllGames(filter = {}) {
	return await gamesDB.find(filter, {
		_id: 0,
		__v: 0,
	});
}
async function getGame(id) {
	return await gamesDB.findOne(
		{ id: id },
		{},
		{
			_id: 0,
			__v: 0,
		}
	);
}

module.exports = {
	getAllGames,
	getGame,
	updateGame,
};
