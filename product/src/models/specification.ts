import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Specification extends Model {
  declare id: number;
  declare content: string;
}

Specification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Specification',
    tableName: 'specifications',
    timestamps: false,
  }
);

export default Specification;
