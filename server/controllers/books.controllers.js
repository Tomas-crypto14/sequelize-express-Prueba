const Book = require("../models/Book");
const Author = require("../models/Authors");
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
exports.getBooks = getBooks
exports.getAuthor = getAuthor;
exports.createBook = createBook;
exports.createAuthor = createAuthor;