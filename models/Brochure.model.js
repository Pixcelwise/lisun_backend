import mongoose from 'mongoose';

const BrochureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: String,
    image: String, // cover image URL
    pdf: {
      data: Buffer,
      contentType: String
    },
    pages: Number,
    size: String,
    publishDate: String,
    downloadCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Brochure', BrochureSchema);
