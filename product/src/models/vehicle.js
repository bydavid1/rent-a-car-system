const Sequelize = require('sequelize');

const Vehicle = sequelize.define('vehicles', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  modelId: Sequelize.INTEGER,
  brandId: Sequelize.INTEGER,
  vehicleTypeId: Sequelize.INTEGER,
  rentalId: Sequelize.INTEGER,
  plate: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  isAvailable: Sequelize.BOOLEAN,
});

module.exports = Vehicle;  