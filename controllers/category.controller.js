
import CategoryModel from "../models/Category.model.js";

export const getAllCategories = async (req, res) => {
    try {
      const categories = await CategoryModel.find();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const createCategory = async (req, res) => {
    try {
      const category = new CategoryModel(req.body);
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  export const updateCategory = async (req, res) => {
    try {
      const updated = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: 'Not found' });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  export const deleteCategory = async (req, res) => {
    try {
      const deleted = await CategoryModel.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  