const model = require("../Models/book.model");

const { User } = model;

async function getWallet(req, res) {
	try {
		const id = req.params.id;
		const response = await User.findOne({ id: id });
		if (!response) {
			const errorMessage = `book with id: ${id} was not found`;
			console.log(errorMessage);
			return res.status(404).json({ message: errorMessage });
		}

		res.status(200).json(book);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}
