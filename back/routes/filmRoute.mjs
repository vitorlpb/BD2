import express from 'express';
import { getAllFilm } from '../controllers/filmController.mjs';

const router = express.Router();

router.get('/', getAllFilm);

export default router;