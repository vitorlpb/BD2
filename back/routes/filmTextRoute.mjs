import express from 'express';
import { getAllFilmText } from '../controllers/filmTextController.mjs';
import { includeFilmText } from '../controllers/filmTextController.mjs';


const router = express.Router();

router.get('/', getAllFilmText);

router.post('/putFilmText', includeFilmText);

export default router;