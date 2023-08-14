import mongoose from 'mongoose';

export interface IGltf {
  productName: string;
  vendorName: string;
  password: string;
  image: IModel;
}

export interface IModel {
  url: string;
  filename: string;
}
