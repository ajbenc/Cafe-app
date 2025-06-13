import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Review from '../models/Review.js';

dotenv.config();

const reviews = [
  {
    user: "Alice",
    comment: "The Classic Latte is amazing! Smooth and creamy.",
    rating: 5,
  },
  {
    user: "Bob",
    comment: "Loved the Deluxe Cappuccino, perfect foam.",
    rating: 4,
  },
  {
    user: "Charlie",
    comment: "Cold Brew was refreshing and strong.",
    rating: 5,
  },
  {
    user: "Dana",
    comment: "Iced Mocha is my new favorite treat.",
    rating: 5,
  },
  {
    user: "Eve",
    comment: "Double espresso packs a punch!",
    rating: 4,
  },
  {
    user: "Frank",
    comment: "Iced Caramel Latte is perfect for summer.",
    rating: 5,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Review.deleteMany({});
    await Review.insertMany(reviews);
    console.log('Reviews seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();