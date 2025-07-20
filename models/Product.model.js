import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    rating: { type: Number },
    reviews: { type: Number },
    stock: { type: Number, default: 0 },
    badge: { type: String },
    description: { type: String },
    features: [String],
    specifications: {
      type: Map,
      of: String
    },
    image: { type: String },
    images: [String]
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
