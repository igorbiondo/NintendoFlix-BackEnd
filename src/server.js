const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

function startServer() {
	server.listen(PORT, () => {
		console.log(`Servidor rodando na porta: ${PORT}`);
	});
}

startServer();
