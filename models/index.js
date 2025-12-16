const sequelize = require('../config/database');
const Category = require('./category')(sequelize);
const Product = require('./product')(sequelize);

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = { sequelize, Category, Product };
