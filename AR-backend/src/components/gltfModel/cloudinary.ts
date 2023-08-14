import config from '@config/config';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: config.cloudName,
  api_key: config.cloudKey,
  api_secret: config.cloudSecret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Walmart',
    allowedFormats: ['jpg', 'png'],
  },
});

export { cloudinary, storage };
