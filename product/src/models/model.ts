import { Model as SequelizeModel, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface ModelAttributes {
  id: number;
  brandId: number;
  name: string;
}

class Model extends SequelizeModel<ModelAttributes> {
  public id!: number;
  public brandId!: number;
  public name!: string;
}

Model.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brandId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Model',
  }
);

export { Model, ModelAttributes };
