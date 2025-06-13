import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { items, total } = req.body;
  const newOrder = new Order({ items, total });
  const saved = await newOrder.save();
  res.status(201).json(saved);
});

export default router;
