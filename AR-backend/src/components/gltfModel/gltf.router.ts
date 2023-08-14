import { Router } from 'express';
import multer from 'multer';
import { storage } from './cloudinary';
import uploadModel from './gltf.controller';

const upload = multer({ storage });

const router: Router = Router();

router.post('/model', upload.single('model'), uploadModel);
router.get('/model:id');

export default router;
