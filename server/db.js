const { Sequelize } = require("sequelize");

module.exports = new Sequelize("CLINIC", "postgres", "aftercoffee", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});