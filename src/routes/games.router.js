const express = require('express');
const gamesController = require('../controller/games.controller');

const gamesRouter = express.Router();

gamesRouter.get('/', gamesController.getAllGames);
gamesRouter.post('/', gamesController.updateGame);
gamesRouter.get('/game/:id', gamesController.getGame);
gamesRouter.get('/loader', gamesController.getLoader);
gamesRouter.get('/rom/:id/:key', gamesController.getRom);
gamesRouter.get(
	'/mais-jogados',
	gamesController.getGameFav
);
gamesRouter.get('/image/:id', gamesController.getImage);

module.exports = gamesRouter;
