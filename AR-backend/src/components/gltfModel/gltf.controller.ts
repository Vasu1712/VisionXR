// @ts-nocheck
import logger from '@core/utils/logger';
import { Request, Response } from 'express';

const uploadModel = async (req: Request, res: Response): Response => {
  try {
    logger.debug('Uploading gltf to cloudinary');

    const url =
      'https://res.cloudinary.com/demo/image/upload/DamagedHelmet3D.glb ';

    return res.json({ message: 'Upload successful', url });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'An error occurred during upload' });
  }
};

export default uploadModel;
