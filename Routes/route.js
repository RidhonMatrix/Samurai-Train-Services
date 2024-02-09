const express = require('express');
const router = express.Router();
require("dotenv").config();

const bookController = require("../Controllers/book.controller");

router.post("/books", bookController.create)
router.put("/books/:id", bookController.update)
router.get("/books/:id", bookController.fetch)
router.get("/books", bookController.fetchAll)


module.exports = router;