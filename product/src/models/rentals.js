const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const Rental = sequelize.define('rentals', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  owner: DataTypes.STRING,
  logo: DataTypes.STRING,
});

module.exports = Rental;  