const Book = require("../models/Book");
const Author = require("../models/Authors");
const Order = require("../models/Order");
const getBooks = (req, res) => {
    res.send("Test")
}

const getAuthor = (req, res) => {
    res.send("Test");
}
const createBook = async (req, res) => {

    const createdBook = await Book.create({title: "Diez semanas en globo", description: "Adios", length: 350})
    res.send(createdBook.id)
}

const createAuthor = async(req, res) => {
    const createdAuthor = await Author.create({name: "JK Tolkien",nacionality: "UK", gender: "Female"})
    res.send(createdAuthor.id)
}

const getOrder = (req, res) => {
    res.send("Test");
}

const createOrder = async(req, res) => {
    const createOrder = await Order.create({date: "27-05-2025", user: "Tomas"})
    res.send(createOrder.id)
}
exports.getBooks = getBooks
exports.getAuthor = getAuthor;
exports.createBook = createBook;
exports.createAuthor = createAuthor;
exports.getOrder = getOrder;
exports.createOrder = createOrder;