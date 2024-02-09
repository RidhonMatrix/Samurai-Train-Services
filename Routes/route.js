const express = require("express");
const router = express.Router();
require("dotenv").config();

const Controller = require("../Controllers/book.controller");
const stationController = require("../Controllers/station.controller");

// router.post("/books", bookController.create)
// router.put("/books/:id", bookController.update)
// router.get("/books/:id", bookController.fetch)
// router.get("/books", bookController.fetchAll)

router.post("/users", Controller.createUser);
router.post("/trains", Controller.createTrain);

router.post("/station", stationController.create);
router.get("/station", stationController.getStations);

module.exports = router;
