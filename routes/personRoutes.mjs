import express from 'express';
import { getAllPersons } from '../controllers/personController.mjs';

const router = express.Router();

router.get('/', getAllPersons);

export default router;