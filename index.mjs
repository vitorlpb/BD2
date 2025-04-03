import promptSync from 'prompt-sync';
import express from 'express';
import sequelize from './db.mjs';
import filmTextRoutes from './back/routes/filmTextRoute.mjs';
import filmActorRoutes from './back/routes/filmActorsRoute.mjs';
import filmCategoryRoutes from './back/routes/filmCategoryRoute.mjs';
import filmRoute from './back/routes/filmRoute.mjs'
import { includeFilmText } from './back/controllers/filmTextController.mjs';
import { includeFilmCategory } from './back/controllers/filmCategoryController.mjs';
import { includeFilmActor } from './back/controllers/filmActorsController.mjs';
import { includeFilm } from './back/controllers/filmController.mjs';

import path from 'path';
import Person from './back/models/personModel.mjs';
import { importCsvData } from './back/utils.mjs';
import { listAllPeople, filterPeopleByName } from './back/controllers/personController.mjs';

const prompt = promptSync();
const app = express();
const port = 3000;

//M1 parte 2
/*
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    let table = '';
    while (table !== 'exit') {
      console.log('Opções disponíveis:');
      console.log('1 - Importar dados do arquivo CSV');
      console.log('2 - Exibir todos os dados');
      console.log('3 - Filtrar dados por nome');
      console.log('Digite "exit" para sair.');
    
      table = prompt('Escolha uma opção: ');
    
      switch (table) {
        case '1':
          await Person.sync({ force: true });
          console.log('Tabela "people" criada com sucesso.');          
          const csvFile = path.resolve('./people-100000.csv');
          await importCsvData(csvFile);
          break;
        case '2':
          await listAllPeople();
          break;
        case '3':
          const name = prompt('Digite parte do nome para filtrar: ');
          await filterPeopleByName(name);
          break;
        default:
          if (table !== 'exit') {
            console.log('Opção inválida. Tente novamente.');
          }
      }
    }

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
*/


//M1 parte 1

app.use(express.json());
app.use('/filmText', filmTextRoutes);
app.use('/filmActor', filmActorRoutes);
app.use('/filmCateg', filmCategoryRoutes);
app.use('/film', filmRoute);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    //const tables = await sequelize.getQueryInterface().showAllTables();
    let table = '';
    while (table !== 'exit') {

      console.log('Aguarde 1 segundo...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Tabelas Disponíveis para inserção:');
      console.log(' Film_Text - 1 ');
      console.log(' Film_Category - 2 ');
      console.log(' Film_Actor - 3 ');
      console.log(' Film - 4 ');
      console.log('Digite "exit" para sair para visualizar as tabelas.');

      table = prompt('Digite o nome da tabela: ');

      switch (table) {
        case '1':
          console.log('Você escolheu a tabela Film_Text');
          let title = prompt('Digite o título: ');
          let description = prompt('Digite a descrição: ');
          await includeFilmText(title, description);
          break;
        case '2':
          console.log('Você escolheu a tabela Film_Category');
          let filmId = prompt('Digite o ID do filme: ');
          let categId = prompt('Digite o ID da categoria: ');
          await includeFilmCategory(filmId, categId);
          break;
        case '3':
          console.log('Você escolheu a tabela Film_Actor');
          let filmIdActor = prompt('Digite o ID do filme: ');
          let actorId = prompt('Digite o ID do ator: ');
          await includeFilmActor(filmIdActor, actorId);
          break;
        case '4':
          console.log('Você escolheu a tabela Film');
          let filmTitle = prompt('Digite o título: ');
          let filmDescription = prompt('Digite a descrição: ');
          let relYear = prompt('Digite o ano de lançamento: ');
          let langId = prompt('Digite o ID do idioma: ');
          let rentalDuration = prompt('Digite a duração do aluguel: ');
          let rentalRate = prompt('Digite a taxa de aluguel: ');
          let length = prompt('Digite o comprimento: ');
          let replacementCost = prompt('Digite o custo de substituição: ');
          let rating = prompt('Digite a classificação (G, PG, PG-13, R, NC-17): ');
          let specialFeatures = prompt('Digite os recursos especiais(Trailers, Commentaries, Deleted Scenes, Behind the Scenes): ');
          await includeFilm(filmTitle, filmDescription, relYear, langId, rentalDuration, rentalRate, length, replacementCost, rating, specialFeatures);
          break;
        default:
          if(table !== 'exit') {
            console.log('Opção inválida. Tente novamente.');
          }
      }
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
