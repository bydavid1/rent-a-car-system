const Sequelize = require('sequelize');

const Model = sequelize.define('model', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brandId: Sequelize.INTEGER,
  name: Sequelize.STRING,
});

module.exports = Model;  