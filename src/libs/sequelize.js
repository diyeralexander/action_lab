const  {Sequelize}  = require('sequelize');

const  {config}  = require('../config/config');

const setUpModels = require('../db/models');

const sequelize = new Sequelize(
    config.dbname, 
    config.dbuser,
    config.dbPassword, {
    host: config.dbHost,
    dialect: 'mysql'
});


sequelize.sync();
setUpModels(sequelize);
async function closeDatabase() {
    await sequelize.close();
}

module.exports = { sequelize, closeDatabase };