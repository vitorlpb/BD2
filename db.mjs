import { Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://sample:password@localhost:3306/test');

export default sequelize;