const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });

module.exports = sequelize;