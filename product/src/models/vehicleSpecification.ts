import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

class VehicleSpecification extends Model {
  declare id: number;
  declare vehicle_id: number;
  declare specification_id: number;
}

VehicleSpecification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'VehicleSpecification',
  }
);


export default VehicleSpecification;