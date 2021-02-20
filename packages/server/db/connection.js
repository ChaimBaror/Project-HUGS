const { Sequelize } = require('sequelize');

exports.getConnection = ({
    database,
    username,
    password,
    schema,
    dialect,
}) => new Sequelize({
    database,
    username,
    password,
    schema,
    dialect,
});
