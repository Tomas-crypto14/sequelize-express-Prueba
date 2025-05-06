const express = require("express");
const booksController = require("../controllers/books.controllers")
const authorsController = require("../controllers/books.controllers");
const OrderController = require("../controllers/books.controllers");
const router = express.Router();

router.get("/", booksController.getBooks);
router.post("/", booksController.createBook);
router.get("/", authorsController.getAuthors);
router.post("/", authorsController.createAuthor);
router.get("/", OrderController.getOrders);
router.post("/", OrderController.createOrder);

module.exports = router;