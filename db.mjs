import { Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:123123@localhost:3306/sakila', {
    logging: false,  
});

export default sequelize;