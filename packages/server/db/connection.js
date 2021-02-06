const { Sequelize } = require("sequelize");

const database = "app";
const username = "app_user";
const password = "1234";
const dialect = "postgres";
const schema = "first_application";

exports.getConnection = () => {
  return new Sequelize({
    database,
    username,
    password,
    schema,
    dialect,
  });
}


