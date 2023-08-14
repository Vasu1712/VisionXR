// @ts-nocheck
import logger from '@core/utils/logger';
import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';

const uploadModel = async (req: Request, res: Response): Response => {
  try {
    logger.debug(req.file);
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Access the Cloudinary public URL from the 'secure_url' field
    const publicUrl = result.secure_url;

    // Perform additional processing if needed

    // Send a response
    return res.json({ message: 'Upload successful', publicUrl });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'An error occurred during upload' });
  }
};

export default uploadModel;
