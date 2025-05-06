const { DataTypes } = require("sequelize");
const db = require("../db");
//El nombre de la const que lee Book debe ser la misma que la ruta del module.exports

  const Book = db.sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      length: {
          type: DataTypes.INTEGER
      }
    },
    {}
  );
module.exports = Book;
