import Person from '../models/person.mjs';

export const createSampleData = async () => {
  await Person.sync({ force: true });
  await Person.bulkCreate([
    { nome: 'Vitor', sobrenome: 'Silva', idade: 30 },
    { nome: 'Maria', sobrenome: 'Oliveira', idade: 25 }
  ]);
};

export const getAllPersons = async (req, res) => {
  try {
    const people = (await Person.findAll());
    res.json(people);
  } catch (error) {
    res.status(500).send(`Error fetching users: ${error.message}`);
  }
};