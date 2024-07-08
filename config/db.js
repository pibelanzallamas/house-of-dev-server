const Sequelize = require("sequelize");

const db = new Sequelize("housedb", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  timezone: "-03:00",
});

module.exports = db;
