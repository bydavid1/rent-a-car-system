import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface VehicleSpecificationAttributes {
  id: number;
  vehicle_id: number;
  specification_id: number;
}

class VehicleSpecification extends Model<VehicleSpecificationAttributes> {}

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