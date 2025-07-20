import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

const storage = multer.memoryStorage(); // store file in memory buffer
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') cb(null, true);
  else cb(new Error('Only PDF files allowed'), false);
};

const upload = multer({ storage, fileFilter });

export const brochureUpload = upload.single('pdf'); // form field name = "pdf"
