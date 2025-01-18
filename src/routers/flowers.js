import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { filterFlowerCtrl } from '../controllers/flowers.js';

const router = Router();

router.post('/filter', ctrlWrapper(filterFlowerCtrl));
