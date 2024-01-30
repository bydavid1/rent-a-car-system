const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const VehicleType = sequelize.define('vehicle_types', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});

module.exports = VehicleType;  