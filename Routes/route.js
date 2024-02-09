const express = require("express");
const router = express.Router();
require("dotenv").config();

const Controller = require("../Controllers/book.controller");
const stationController = require("../Controllers/station.controller");
const walletController = require("../Controllers/wallet.controller");

// router.post("/books", bookController.create)
// router.put("/books/:id", bookController.update)
// router.get("/books/:id", bookController.fetch)
// router.get("/books", bookController.fetchAll)

router.post("/users", Controller.createUser);
router.post("/trains", Controller.createTrain);

router.post("/stations", stationController.create);
router.get("/stations", stationController.getStations);
router.get("/wallets/:wallet_id", walletController.getWallet);

router.put("/wallets/:wallet_id", walletController.addWallet);

module.exports = router;
