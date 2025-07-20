import ProductModel from "../models/Product.model.js";

export const getAllProducts = async (req , res) => {
    try{
        const Products = await ProductModel.find();
        res.json(Products)
    } catch(e) {
        res.status(500).json({error: e.message})
    }
}

export const getProductById = async (req, res) => {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) return res.status(404).json({ error: 'Not found' });
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const createProduct = async (req, res) => {
    try {
      const newProduct = new ProductModel(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  export const updateProduct = async (req, res) => {
    try {
      const updated = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: 'Not found' });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  export const deleteProduct = async (req, res) => {
    try {
      const deleted = await ProductModel.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };