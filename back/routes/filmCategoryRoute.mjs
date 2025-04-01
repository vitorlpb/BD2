import {getAllFilmCategory, includeFilmCategory} from "../controllers/filmCategoryController.mjs"
import express from 'express';

const router = express.Router();

router.get('/', getAllFilmCategory);
router.post('/', includeFilmCategory);

export default router;