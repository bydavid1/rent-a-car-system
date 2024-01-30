const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Brand = sequelize.define('brands', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  logo: DataTypes.STRING,
});

module.exports = Brand;