const db = require('../model/billboard.model');

async function getAllBillboards(req, res) {
	return res.status(200).json(await db.finBillboard());
}

async function getBillboard(req, res) {
	const r = Math.round(Math.random() * (4 - 1) + 1);
	console.log(r);
	return res
		.status(200)
		.json(await db.finBillboard({ bId: r }));
}

async function postBillboard(req, res) {
	try {
		res
			.status(200)
			.json(await db.updateBillboard(req.body));
	} catch (err) {
		res.status(400).json({ erro: err.message });
	}
}

module.exports = {
	getAllBillboards,
	getBillboard,
	postBillboard,
};
