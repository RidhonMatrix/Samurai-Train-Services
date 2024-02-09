const model = require("../Models/station.model");

const { Station } = model;

async function create(req, res) {
	try {
		const addStation = await Station.create(req.body);
		res.status(201).json(req.body);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

async function getStations(req, res) {
	try {
		const args = req.query;

		const response = await Station.find({}).sort({
			id: 1,
		});
		res.status(200).json({ stations: response });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

module.exports = { create, getStations };
