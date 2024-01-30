const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Vehicle = sequelize.define('vehicles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  modelId: DataTypes.INTEGER,
  brandId: DataTypes.INTEGER,
  vehicleTypeId: DataTypes.INTEGER,
  rentalId: DataTypes.INTEGER,
  plate: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  isAvailable: DataTypes.BOOLEAN,
});

module.exports = Vehicle;  