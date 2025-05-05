const express = require("express");
const booksController = require("../controllers/books.controllers")
const authorsController = require("../controllers/books.controllers");
const router = express.Router();

router.get("/", booksController.getBooks);
router.post("/", booksController.createBook);
router.get("/", authorsController.getAuthor);
router.post("/", authorsController.createAuthor)

module.exports = router;