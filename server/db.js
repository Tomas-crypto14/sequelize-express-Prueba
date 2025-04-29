const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("prueba_sequelize", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

const db = {}
db.sequelize = sequelize;


module.exports = db;
