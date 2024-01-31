import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface VehicleAttributes {
  id: number;
  modelId: number;
  brandId: number;
  vehicleTypeId: number;
  rentalId: number;
  plate: string;
  price: number;
  description: string;
  isAvailable: boolean;
}

class Vehicle extends Model<VehicleAttributes> {
  public id!: number;
  public modelId!: number;
  public brandId!: number;
  public vehicleTypeId!: number;
  public rentalId!: number;
  public plate!: string;
  public price!: number;
  public description!: string;
  public isAvailable!: boolean;
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

export { Vehicle, VehicleAttributes };
