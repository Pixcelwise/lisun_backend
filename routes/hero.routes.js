import express from 'express';
import {
  getAllSlides,
  createSlide,
  updateSlide,
  deleteSlide
} from '../controllers/hero.controller.js';

const router = express.Router();

router.get('/', getAllSlides);
router.post('/', createSlide);
router.put('/:id', updateSlide);
router.delete('/:id', deleteSlide);

export default router;
