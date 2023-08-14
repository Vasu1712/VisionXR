import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import model from '@components/gltfModel/gltf.router';

const router: Router = Router();
router.use(healthCheck);
router.use(model);

export default router;
