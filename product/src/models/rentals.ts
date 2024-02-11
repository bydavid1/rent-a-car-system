import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Rental extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
  declare phone: string;
  declare email: string;
  declare owner: string;
  declare logo: string;
}

Rental.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Rental',
  }
);

export default Rental;
