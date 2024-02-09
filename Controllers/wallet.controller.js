const model = require("../Models/book.model");

const { User } = model;

async function getWallet(req, res) {
	try {
		const id = req.params.wallet_id;
		console.log(id);
		const response = await User.findOne({ user_id: id });
		if (!response) {
			const errorMessage = `wallet with id: ${id} was not found`;
			console.log(errorMessage);
			return res.status(404).json({ message: errorMessage });
		}
		const resWallet = {
			wallet_id: response.user_id,
			balance: response.balance,
			wallet_user: {
				user_id: response.user_id,
				user_name: response.user_name,
			},
		};

		res.status(200).json(resWallet);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

async function addWallet(req, res) {
	let amount = req.body.recharge;
	const id = req.params.wallet_id;

	console.log(amount);
	try {
		const userdata = await User.findOne({ user_id: id });
		amount += userdata.balance;
		if (amount < 100 || amount > 10000) {
			const errorMessage = `invalid amount: ${amount}`;
			console.log(errorMessage);
			return res.status(400).json({ message: errorMessage });
		}
		const response = await User.findOneAndUpdate(
			{ user_id: id },
			{ balance: amount },
			{
				new: true,
			}
		);
		if (!response) {
			const errorMessage = `wallet with id: ${id} was not found`;
			console.log(errorMessage);
			return res.status(404).json({ message: errorMessage });
		}
		res.status(200).json(response);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
}

module.exports = { getWallet, addWallet };
