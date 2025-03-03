import express from 'express';
import sequelize from './db.mjs';
import personRoutes from './routes/personRoutes.mjs';
import { createSampleData } from './controllers/personController.mjs';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/persons', personRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await createSampleData();
    console.log('Sample data inserted.');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
