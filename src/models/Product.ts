import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  category: string;
  collection: string;
  gender: 'woman' | 'man' | 'unisex';
  tags: string[];
  description: string;
  details: string;
  care: string[];
  images: string[];
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  inStock: boolean;
  featured: boolean;
  newArrival: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    collection: {
      type: String,
      required: true,
      index: true,
    },
    gender: {
      type: String,
      enum: ['woman', 'man', 'unisex'],
      required: true,
      index: true,
    },
    tags: [{
      type: String,
    }],
    description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: '',
    },
    care: [{
      type: String,
    }],
    images: [{
      type: String,
    }],
    sizes: [{
      type: String,
    }],
    colors: [{
      name: String,
      hex: String,
    }],
    inStock: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    newArrival: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    suppressReservedKeysWarning: true,
  }
);

// Create indexes for common queries
ProductSchema.index({ collection: 1, gender: 1 });
ProductSchema.index({ category: 1, gender: 1 });
ProductSchema.index({ featured: 1 });
ProductSchema.index({ newArrival: 1 });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
