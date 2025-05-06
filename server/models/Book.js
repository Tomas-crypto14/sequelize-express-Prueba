const { DataTypes } = require("sequelize");
<<<<<<< HEAD
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
=======
const db = require("../db")

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
      type: DataTypes.INTEGER,
    },
  },
  {}
);

>>>>>>> 8199d50dddc6a3c1a31790d1dafd93e68afea4b9
module.exports = Book;
