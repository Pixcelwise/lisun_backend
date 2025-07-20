import HeroSlideModel from "../models/HeroSlide.model.js";

export const getAllSlides = async (req, res) => {
  try {
    const slides = await HeroSlideModel.find();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSlide = async (req, res) => {
  try {
    const slide = new HeroSlideModel(req.body);
    await slide.save();
    res.status(201).json(slide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateSlide = async (req, res) => {
  try {
    const updated = await HeroSlideModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteSlide = async (req, res) => {
  try {
    const deleted = await HeroSlideModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
