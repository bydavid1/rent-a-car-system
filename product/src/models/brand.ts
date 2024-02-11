import { Model, CreationOptional, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Brand extends Model {
  declare id: CreationOptional<number>;
  declare name: string;
  declare logo: string;
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

export default Brand;