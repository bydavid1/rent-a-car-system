import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface BrandAttributes {
  id: number;
  name: string;
  logo: string;
}

class Brand extends Model<BrandAttributes> {
  public id!: number;
  public name!: string;
  public logo!: string;
}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Brand',
  }
);

export { Brand, BrandAttributes };