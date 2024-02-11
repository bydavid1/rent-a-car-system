import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

interface RentalAttributes {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  owner: string;
  logo: string;
}

class Rental extends Model<RentalAttributes> {
  public id!: number;
  public name!: string;
  public address!: string;
  public phone!: string;
  public email!: string;
  public owner!: string;
  public logo!: string;
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

export { Rental, RentalAttributes };
