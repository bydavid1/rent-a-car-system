const { Sequelize } = require('sequelize');

class Database {
  constructor() {    
    this.sequelize = new Sequelize(env.database, env.user, env.password, {
      host: env.host,
      dialect: 'mysql',
    });
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async disconnect() {
    try {
      await this.sequelize.close();
      console.log('Connection has been closed successfully.');
    } catch (error) {
      console.error('Unable to close the database connection:', error);
    }
  }
}

module.exports = new Database();
