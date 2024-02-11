import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Vehicle extends Model {
  declare id: number;
  declare modelId: number;
  declare brandId: number;
  declare vehicleTypeId: number;
  declare rentalId: number;
  declare plate: string;
  declare price: number;
  declare description: string;
  declare isAvailable: boolean;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    vehicleTypeId: DataTypes.INTEGER,
    rentalId: DataTypes.INTEGER,
    plate: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'Vehicle',
  }
);

export default Vehicle;
