import { IGltf, IModel } from '@components/gltfModel/gltf.interface';
import mongoose, { Schema } from 'mongoose';

const ImageSchema: Schema<IModel> = new Schema({
  url: String,
  filename: String,
});

const HostelSchema: Schema<IGltf> = new Schema({
  productName: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  image: [ImageSchema],
});

const Gltf = mongoose.model<IGltf>('Hostel', HostelSchema);
// eslint-disable-next-line import/prefer-default-export
export { Gltf };
