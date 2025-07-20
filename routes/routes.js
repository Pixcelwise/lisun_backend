import express from 'express';
import productRoutes from './product.routes.js';
import brochureRoutes from './brochure.routes.js';
import categoryRoutes from './category.routes.js';
import heroRoutes from './hero.routes.js';

const routes = (app) => {
  app.use('/api/products', productRoutes);
  app.use('/api/brochures', brochureRoutes);
  app.use('/api/categories', categoryRoutes);
  app.use('/api/hero-slides', heroRoutes);

  app.get('/', (req, res) => {
    res.send('🔥 API is working');
  });
};

export default routes;
