import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    image: { type: String },
    count: { type: String } // e.g., "120+ Products"
  },
  { timestamps: true }
);

export default mongoose.model('Category', CategorySchema);
