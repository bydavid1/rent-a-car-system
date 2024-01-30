const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Model = sequelize.define('model', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brandId: DataTypes.INTEGER,
  name: DataTypes.STRING,
});

module.exports = Model;  