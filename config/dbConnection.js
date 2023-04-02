const Sequelise = require("sequelize");
require("dotenv").config();
const express = require("express");
const app = express();

const sequelize = new Sequelise({
  dialect: "mysql",
  database: process.env.db_name,
  username: process.env.db_user,
  password: process.env.db_password,
  host: process.env.HOST,
  PORT: process.env.PORT,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
