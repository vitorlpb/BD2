import FilmText from '../models/filmTextModel.mjs';

export const getAllFilmText = async (req, res) => {
  try {
    const fText = (await FilmText.findAll());
    res.json(fText);
  } catch (error) {
    res.status(500).send(`Error fetching users: ${error.message}`);
  }
};

export const includeFilmText = async (title, description) => {
  try {
    const sampleData = {
        title: title,
        description: description,
      };
    const newFilmText = await FilmText.create(sampleData);
    console.log('Inserted Data:', newFilmText.toJSON()); // Log dos dados inseridos
  } catch (error) {
    console.error('Error Including FilmText:', error); // Log de erros
  }
}
/*
export const includeFilmText = async (req, res) => {
  try {
    //const { title, description } = req.body;
    const { title, description } = ["teste", "testando"];
    const newFilmText = await FilmText.create({ title, description });
    res.status(201).json(newFilmText);
  } catch (error) {
    res.status(500).send(`Error creating film text: ${error.message}`);
  }
}
  */