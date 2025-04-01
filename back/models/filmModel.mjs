import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';
//const Language = require('./languageModel');
import Language from './languageModel.mjs';

const Film = sequelize.define('Film', {
  film_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  release_year: {
    type: DataTypes.INTEGER(4),
    allowNull: true,
  },
  language_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    references: {
      model: Language,
      key: 'language_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
  original_language_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true,
    references: {
      model: Language,
      key: 'language_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
  rental_duration: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 3,
  },
  rental_rate: {
    type: DataTypes.DECIMAL(4,2),
    allowNull: false,
    defaultValue: 4.99,
  },
  length: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: true,
  },
  replacement_cost: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
    defaultValue: 19.99,
  },
  rating: {
    type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
    defaultValue: 'G',
  },
  special_features: {
    type: DataTypes.ENUM('Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes'),
    allowNull: true,
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'film',
  timestamps: false,
  indexes: [
    { name: 'idx_title', fields: ['title'] },
    { name: 'idx_fk_language_id', fields: ['language_id'] },
    { name: 'idx_fk_original_language_id', fields: ['original_language_id'] },
  ],
});

export default Film;