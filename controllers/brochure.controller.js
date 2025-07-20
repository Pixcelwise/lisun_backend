import BrochureModel from "../models/Brochure.model.js";

export const getAllBrochures = async (req, res) => {
    try {
      const brochures = await BrochureModel.find();
      res.json(brochures);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const createBrochure = async (req, res) => {
    try {
      const pdf = {
        data: req.file.buffer,
        contentType: req.file.mimetype
      };
  
      const brochure = new BrochureModel({
        ...req.body,
        pdf,
        size: (req.file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
  
      await brochure.save();
      res.status(201).json({ message: 'Brochure uploaded', brochureId: brochure._id });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  export const updateBrochure = async (req, res) => {
    try {
      const updated = await BrochureModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: 'Not found' });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  export const deleteBrochure = async (req, res) => {
    try {
      const deleted = await BrochureModel.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const getBrochurePDF = async (req, res) => {
    try {
      const brochure = await BrochureModel.findById(req.params.id);
      
      if (!brochure || !brochure.pdf || !brochure.pdf.data) {
        return res.status(404).json({ error: 'PDF not found' });
      }
  
      res.setHeader('Content-Type', brochure.pdf.contentType || 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${brochure.pdf.originalname || 'brochure.pdf'}"`);
  
      return res.send(brochure.pdf.data);
    } catch (err) {
      console.error('❌ Error serving PDF:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  };
  