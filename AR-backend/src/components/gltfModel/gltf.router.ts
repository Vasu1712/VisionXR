import { Router } from 'express';

import uploadModel from './gltf.controller';

const router: Router = Router();

// router.post('/model', upload.single('model'), uploadModel);
router.get('/model:id');
router.get('/upload', uploadModel);

export default router;
