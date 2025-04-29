const db = require("../db")

const getBooks = (req, res) => {
    res.send("Test")
}

const createBook = async (req, res) => {
    
    const createdBook = await db.books.create({title: "Diez semanas en globo", description: "Adios", length: 350})
    res.send(createdBook.id)
}

exports.getBooks = getBooks
exports.createBook = createBook