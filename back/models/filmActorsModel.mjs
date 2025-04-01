import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';
import Actor from './actorsModel.mjs';
import Film from './filmModel.mjs';
//const Actor = require('./actorModel');
//const Film = require('./filmModel');

const FilmActor = sequelize.define('FilmActor', {
  actor_id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Actor,
      key: 'actor_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
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
  last_update: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'film_actor',
  timestamps: false,
  indexes: [
    {
      name: 'idx_fk_film_id',
      fields: ['film_id'],
    },
  ],
});

export default FilmActor;

