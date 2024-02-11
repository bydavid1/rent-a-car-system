import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface SpecificationAttributes {
  id: number;
  content: string;
}

class Specification extends Model<SpecificationAttributes> {}

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
