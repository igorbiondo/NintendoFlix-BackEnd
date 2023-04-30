const gamesDB = require('./games.model');
const billboarDB = require('./billboard.mongo');

async function finBillboard(filtro = {}) {
	return await billboarDB.find(filtro, {
		_id: 0,
		__v: 0,
	});
}

async function updateBillboard(body) {
	const game = await gamesDB.getGame(body.gameId);
	if (!game) {
		throw new Error('Jogo não encontrado');
	}
	return await billboarDB.findOneAndUpdate(
		{
			bId: +body.bId,
		},
		{
			bId: +body.bId,
			gameId: +body.gameId,
			bannerUrl: body.bannerUrl,
			logoUrl: body.logoUrl,
			synopsis: body.synopsis,
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
}
module.exports = {
	finBillboard,
	updateBillboard,
};
