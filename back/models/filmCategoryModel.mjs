import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';
import Film from './filmModel.mjs'
import Category from './categoryModel.mjs';

const FilmCategory = sequelize.define('FilmCategory', {
  film_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Film,
      key: 'film_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
  category_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Category,
      key: 'category_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'film_category',
  timestamps: false,
});

export default FilmCategory;