const Sequelize = require('sequelize');

const Brand = sequelize.define('brand', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  logo: Sequelize.STRING,
});

module.exports = Brand;