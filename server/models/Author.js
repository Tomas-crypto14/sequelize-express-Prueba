const { DataTypes } = require("sequelize");
const db = require("../db")

const Author = db.sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {}
);

module.exports = Author;