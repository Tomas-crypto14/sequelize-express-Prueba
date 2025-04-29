const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("prueba_sequelize", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

const db = {}
db.sequelize = sequelize;

//el module.exports del db es leído en el Models del Book.js
module.exports = db;
