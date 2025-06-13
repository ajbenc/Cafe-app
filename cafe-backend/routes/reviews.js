import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews.map(r => ({
    id: r._id.toString(),
    user: r.user,
    comment: r.comment,
    rating: r.rating,
    createdAt: r.createdAt,
  })));
});

router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  const saved = await newReview.save();
  res.status(201).json({
    id: saved._id.toString(),
    user: saved.user,
    comment: saved.comment,
    rating: saved.rating,
    createdAt: saved.createdAt,
  });
});

export default router;
