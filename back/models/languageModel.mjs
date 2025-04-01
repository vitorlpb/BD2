import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';

const Language = sequelize.define('Language', {
  language_id: {
    type: DataTypes.TINYINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(20),
    allowNull: false,
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'language',
  timestamps: false,
});

export default Language;