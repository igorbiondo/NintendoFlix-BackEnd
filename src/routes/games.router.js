const express = require('express');
const gamesController = require('../controller/games.controller');
const imageController = require('../controller/image.controller');
const billboardController = require('../controller/billboard.controller');

const gamesRouter = express.Router();

gamesRouter.get('/initial', gamesController.getInitial);
// gamesRouter.post('/', gamesController.updateGame);
gamesRouter.get('/game/:id', gamesController.getGame);
gamesRouter.get('/loader', gamesController.getLoader);
gamesRouter.get('/rom/:id/:key', gamesController.getRom);
gamesRouter.get(
	'/mais-jogados',
	gamesController.getGameFav
);
gamesRouter.get(
	'/image/:imageId',
	imageController.getImage
);
gamesRouter.get(
	'/image/banner/:imageId',
	imageController.getBanner
);
gamesRouter.get(
	'/image/logo/:imageId',
	imageController.getLogo
);
gamesRouter.get(
	'/billboard',
	billboardController.getBillboard
);
// gamesRouter.post(
// 	'/billboard',
// 	billboardController.postBillboard
// );

module.exports = gamesRouter;
