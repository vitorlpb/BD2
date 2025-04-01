import express from 'express';
import { getAllFilmActors } from '../controllers/filmActorsController.mjs';

const router = express.Router();

router.get('/', getAllFilmActors);

export default router;