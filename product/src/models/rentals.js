const Sequelize = require('sequelize');

const Rental = sequelize.define('rentals', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  owner: Sequelize.STRING,
  logo: Sequelize.STRING,
});

module.exports = Rental;  