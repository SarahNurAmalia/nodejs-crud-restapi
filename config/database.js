const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'nodejs_crud',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

module.exports = sequelize;
