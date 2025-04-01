
import { DataTypes } from 'sequelize';
import sequelize from '../../db.mjs';

const FilmText = sequelize.define('FilmText', {
  film_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'film_text',
  timestamps: false,
  indexes: [
    {
      name: 'idx_title_description',
      type: 'FULLTEXT',
      fields: ['title', 'description'],
    },
  ],
});
export default FilmText;
//module.exports = FilmText;
