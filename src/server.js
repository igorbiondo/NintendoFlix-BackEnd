const path = require('path');
const express = require('express');
const cors = require('cors');
const gamesRouter = require('./routes/games.router');

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};

const app = express();
const PORT = 3001;
app.use(
	express.static(path.join(__dirname, '..', 'public'))
);

app.use(cors(corsOptions));

app.use('/games', gamesRouter);
app.get('/*', (req, res) => {
	res.sendFile(
		path.join(__dirname, '..', 'public', 'index.html')
	);
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta: ${PORT}`);
});
