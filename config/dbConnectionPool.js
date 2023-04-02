const Sequelise = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelise(
  process.env.db_name,
  process.env.db_user,
  process.env.db_password,
  {
    host:process.env.HOST,
    dialect:"mysql"
  }
);

console.log(sequelize);
module.exports = sequelize;
