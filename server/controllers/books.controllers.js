const Book = require("../models/Book")
const Author = require("../models/Author");
const Order = require("../models/Order");
const getBooks = (req, res) => {
    res.send("Test")
}

const getAuthors = (req, res) => {
    res.send("Test");
}
const createBook = async (req, res) => {
    const createdBook = await Book.create({title: "Cinco semanas en globo", description: "Hola", length: 350})
    res.send(createdBook.id)
}

const createAuthor = async(req, res) => {
    const createAuthor = await Author.create({name: "JR Tolkien", nacionality: "UK", gender: 'M'});
    res.send(createAuthor.id);
}

const getOrders = (req, res) => {
    res.send("Test");
}

const createOrder = async(req, res) => {
    const createOrder = await Order.create({name: "Mila"});
        res.send(createOrder.id)
}

exports.getBooks = getBooks
exports.createBook = createBook
exports.getAuthors = getAuthors
exports.createAuthor = createAuthor;
exports.getOrders = getOrders;
exports.createOrder = createOrder;