import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';

const Actor = sequelize.define('Actor', {
  actor_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'actor',
  timestamps: false,
  indexes: [
    {
      name: 'idx_actor_last_name',
      fields: ['last_name'],
    },
  ],
});

export default Actor;