import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  // Map _id to id for frontend compatibility
  res.json(products.map(p => ({
    id: p._id.toString(),
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
  })));
});

export default router;
