require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
	console.log('Database Connected');
});

mongoose.connection.on('error', (err) => {
	console.error(err);
});

async function mongoConnect() {
	await mongoose.connect(process.env.MONGODB_URL);
}

module.exports = {
	mongoConnect,
};
