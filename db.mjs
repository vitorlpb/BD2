import { Sequelize} from 'sequelize';

//M1 parte 2
/*
const sequelize = new Sequelize('people', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  });

*/
//M1 parte 1

const sequelize = new Sequelize('mysql://root:123123@localhost:3306/sakila', {
    logging: false,  
});


export default sequelize;