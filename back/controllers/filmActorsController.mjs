import FilmActor from "../models/filmActorsModel.mjs";
import Film from "../models/filmModel.mjs";
import Actor from "../models/actorsModel.mjs";

export const getAllFilmActors = async (req, res) => {
  try {
    const fActor = (await FilmActor.findAll());
    res.json(fActor);
  } catch (error) {
    res.status(500).send(`Error fetching users: ${error.message}`);
  } 
}

export const includeFilmActor = async (filmId, actorId) => {
  try {
    const sampleData = {
        film_id: filmId,
        actor_id: actorId,
      };

      if (!filmId || !actorId) {
        throw new Error('filmId and actorId are required');
      }
      if (isNaN(filmId) || isNaN(actorId)) {
        throw new Error('filmId and actorId must be numbers');
      }
      if (filmId < 1 || actorId < 1) {
        throw new Error('filmId and actorId must be greater than 0');
      }
      if (await Film.findByPk(filmId) === null) {
        throw new Error(`filmId ${filmId} does not exist`);
      }
      if (await Actor.findByPk(actorId) === null) {
        throw new Error(`actorId ${actorId} does not exist`);
      }

    const newFilmActor = await FilmActor.create(sampleData);
    console.log('Inserted Data:', newFilmActor.toJSON()); // Log dos dados inseridos
  } catch (error) {
    console.error('Error Including FilmActor:', error); // Log de erros
  }
}