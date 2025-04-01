import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';

const Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'category',
  timestamps: false,
});

export default Category;