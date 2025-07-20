import express from 'express';
import {
  getAllBrochures,
  createBrochure,
  updateBrochure,
  deleteBrochure,
  getBrochurePDF
} from '../controllers/brochure.controller.js';
import { brochureUpload } from '../middleware/upload.js';

const router = express.Router();

// Upload + create metadata
router.post('/', brochureUpload, createBrochure);

// Basic CRUD
router.get('/', getAllBrochures);
router.put('/:id', updateBrochure);
router.delete('/:id', deleteBrochure);
router.get('/:id/pdf', getBrochurePDF);


export default router;
