import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';

dotenv.config();

const products = [
  {
    name: "Classic Latte",
    description: "Espresso coffee with frothy milk, smooth and comforting.",
    price: 3.5,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
  },
  {
    name: "Deluxe Cappuccino",
    description: "A balanced blend of espresso, milk and creamy foam. Perfect for any time of day.",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cold Brew",
    description: "Cold brew coffee infused for 12 hours, with notes of chocolate and caramel.",
    price: 4.2,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Iced Mocha",
    description: "Rich espresso blended with chocolate syrup and cold milk, served over ice.",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1611938910238-819a7fa37b6c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Double espresso",
    description: "A strong and bold double shot of espresso, perfect for a quick pick-me-up.",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1595609093453-ae6849030ce5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, 
  {
    name: "Iced Caramel Latte",
    description: "A refreshing iced latte with a drizzle of caramel, perfect for warm days.",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1632401798178-8cb5935d2812?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();