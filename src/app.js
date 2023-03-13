const express = require('express');
const app = express();

const path = require('path');
const cors = require('cors');
const gamesRouter = require('./routes/games.router');

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
	express.static(path.join(__dirname, '..', 'public'))
);

app.use('/games', gamesRouter);
app.get('/*', (req, res) => {
	res.sendFile(
		path.join(__dirname, '..', 'public', 'index.html')
	);
});

module.exports = app;
