import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface VehicleTypeAttributes {
  id: number;
  name: string;
}

class VehicleType extends Model<VehicleTypeAttributes> {
  public id!: number;
  public name!: string;
}

VehicleType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'VehicleType',
  }
);

export { VehicleType, VehicleTypeAttributes };
