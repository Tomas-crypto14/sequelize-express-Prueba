const { DataTypes } = require("sequelize");
const db = require("../db")

const Order = db.sequelize.define(
  "Order",
  {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {}
);

module.exports = Order;