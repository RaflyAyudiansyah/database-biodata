const Sequelize = require("sequelize");
const sequelize = new Sequelize("biodata", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.data_diri = require("./model.js")(sequelize, Sequelize);

module.exports = db;
