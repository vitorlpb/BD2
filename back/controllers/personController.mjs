import Person from "../models/personModel.mjs";
import sequelize from "../../db.mjs";
import { Op } from "sequelize";

export const listAllPeople = async () => {
  const people = await Person.findAll();
  console.log('Dados importados:');
  console.table(people.map(person => person.toJSON()));
};

export const filterPeopleByName = async (name) => {
  const people = await Person.findAll({
    where: {
      first_name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  console.log(`Resultados para o nome "${name}":`);
  console.table(people.map(person => person.toJSON()));
};