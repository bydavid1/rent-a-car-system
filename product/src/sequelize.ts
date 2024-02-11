import { Sequelize } from 'sequelize';
import { development, test, production } from './config/db';

let dbConfig;

switch (process.env.NODE_ENV) {
  case 'test':
    dbConfig = test;
    break;
  case 'production':
    dbConfig = production;
    break;
  default:
    dbConfig = development;
}

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
});

export default sequelize;
