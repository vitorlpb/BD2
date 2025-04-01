import Category from "../models/filmCategoryModel.mjs";
import Film from "../models/filmModel.mjs";

export const getAllFilmCategory = async (req, res) => {
    try {
      const fCategory = (await Category.findAll());
      res.json(fCategory);
    } catch (error) {
      res.status(500).send(`Error fetching users: ${error.message}`);
    }
  };

export const includeFilmCategory = async (filmId, categId) => {
  try {
    const sampleData = {
        film_id: filmId,
        category_id: categId,
      };

      if (!filmId || !categId) {
        throw new Error('filmId and categId are required');
      }
      if (isNaN(filmId) || isNaN(categId)) {
        throw new Error('filmId and categId must be numbers');
      }
      if (filmId < 1 || categId < 1) {
        throw new Error('filmId and categId must be greater than 0');
      }
      if (await Film.findByPk(filmId) === null) {
        throw new Error(`filmId ${filmId} does not exist`);
        //throw new MessageEvent(`filmId ${filmId} does not exist`);
      }
      if (await Category.findByPk(categId) === null) {
        //throw new MessageEvent(`filmId ${filmId} does not exist`).type;
        throw new Error(`categId ${categId} does not exist`);
      }
      /* where filmId & categId = filmId[Film] & categId[Category]*/

      //let teste = await Category.findByPk(categId);

    const newFilmCategory = await Category.create(sampleData);
    console.log('Inserted Data:', newFilmCategory.toJSON()); // Log dos dados inseridos
  } catch (error) {
    console.error('Error Including FilmCategory', error); // Log de erros
  }
}