const Sequelize = require('sequelize');

const VehicleType = sequelize.define('vehicle_types', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
});

module.exports = VehicleType;  