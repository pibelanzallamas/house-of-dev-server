const Sequelize = require("sequelize");
const db = new Sequelize("housedb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  timezone: "-03:00",
});

module.exports = db;
