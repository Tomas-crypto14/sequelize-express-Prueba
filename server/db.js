const { Sequelize } = require("sequelize");
const defineBookModel = require("./models/Book")

const sequelize = new Sequelize("prueba_sequelize", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

const db = {}
db.books = defineBookModel(sequelize);
db.sequelize = sequelize;


module.exports = db;
