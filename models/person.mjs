import { DataTypes } from 'sequelize';
import sequelize from '../db.mjs';

const Person = sequelize.define('person', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'person',
  timestamps: false,
  primaryKey: false
});

export default Person;