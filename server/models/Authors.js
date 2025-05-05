const { DataTypes } = require("sequelize");
const db = require("../db");
//El nombre de la const que lee Book debe ser la misma que la ruta del module.exports

  const Author = db.sequelize.define(
    "Authors",
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
