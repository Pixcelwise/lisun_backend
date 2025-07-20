import mongoose from 'mongoose';

const HeroSlideSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String },
    image: { type: String },
    cta: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('HeroSlide', HeroSlideSchema);
