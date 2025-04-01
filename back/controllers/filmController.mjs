import Film from "../models/filmModel.mjs";
import FilmText from "../models/filmTextModel.mjs";

export const getAllFilm = async (req, res) => {
    try {
        const film = (await Film.findAll());
        res.json(film);
      } catch (error) {
        res.status(500).send(`Error fetching users: ${error.message}`);
      }
}

export const includeFilm = async (filmTitle, description, relYear, langId, rentalDuration, rentalRate, length, replacementCost, rating, specialFeatures) => {
  try {
    const TextSampleData = {
        title: filmTitle,
        description: description,
      };
    const FilmSampleData = {
        title: filmTitle,
        description: description,
        release_year: relYear,
        language_id: langId,
        original_language_id: null,
        rental_duration: rentalDuration,
        rental_rate: rentalRate,
        length: length,
        replacement_cost: replacementCost,
        rating: rating, // ('G', 'PG', 'PG-13', 'R', 'NC-17')
        special_features: specialFeatures, //('Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes')
      };

    //await FilmText.create(TextSampleData);
    const newFilm = await Film.create(FilmSampleData);
    console.log('Inserted Data:', newFilm.toJSON()); // Log dos dados inseridos
  } catch (error) {
    console.error('Error Including Film:', error); // Log de erros
  }
}