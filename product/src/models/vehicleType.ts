import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

class VehicleType extends Model {
  declare id: number;
  declare name: string;
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

export default VehicleType;
