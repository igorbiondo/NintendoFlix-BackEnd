const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

async function startServer() {
	await mongoConnect();

	server.listen(PORT, () => {
		console.log(`Servidor rodando na porta: ${PORT}`);
	});
}

startServer();
