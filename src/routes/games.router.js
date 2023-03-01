const express = require('express');
const gamesController = require('../controller/games.controller');
const imageController = require('../controller/image.controller');

const gamesRouter = express.Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get('/game/:id', gamesController.getGame);
gamesRouter.get('/loader', gamesController.getLoader);
gamesRouter.get('/rom/:id/:rom', gamesController.getRom);
gamesRouter.get(
	'/games/mais-jogados',
	gamesController.getGameFav
);
gamesRouter.get('/image/:id', imageController.getImage);

module.exports = gamesRouter;
