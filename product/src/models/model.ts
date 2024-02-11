import { Model as SequelizeModel, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Model extends SequelizeModel {
  declare id: number;
  declare brandId: number;
  declare name: string;
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

export default Model;
