const Book = require("../models/Book")

const getBooks = (req, res) => {
    res.send("Test")
}

const createBook = async (req, res) => {
    const createdBook = await Book.create({title: "Cinco semanas en globo", description: "Hola", length: 350})
    res.send(createdBook.id)
}

const getAuthors = (req, res) => {
    res.send("Test");
}

const createAuthor = async(req, res) => {
    const createAuthor = await Author.create({name: "JR Tolkien", nacionality: "UK", gender: 'M'});
    res.send(createAuthor.id);
}
exports.getBooks = getBooks
exports.createBook = createBook
exports.getAuthors = getAuthors;
exports.createAuthor = createAuthor;
