const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PortfolioItem = require('../models/PortfolioItem');

dotenv.config();

const portfolioItems = [
  {
    title: "Nahargarh Palace Chandelier Courtyard",
    category: "Palace Lighting & Chandeliers",
    location: "Sawai Madhopur, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85",
    description: "An enchanting open courtyard illuminated by 40+ crystal chandeliers, warm architectural amber facade wash, and silent DG power backup.",
    order: 1
  },
  {
    title: "Six Senses Fort Barwara Sangeet Production",
    category: "Stage Trussing & Moving Heads",
    location: "Chauth Ka Barwara, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
    description: "Concert-grade aluminum box trussing, sharpie moving head beams, cryogenic low fog, and computerized DMX light synchronization.",
    order: 2
  },
  {
    title: "The Oberoi Vanyavilas Fairy Light Forest",
    category: "Heritage Shamiyana & Tenting",
    location: "Ranthambore Road, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    description: "Ten thousand warm fairy lights suspended across wildlife garden groves, complemented by traditional Rajasthani shamiyana canopies.",
    order: 3
  },
  {
    title: "Sawai Vilas Sunset Banquet Gala",
    category: "Full Event Illumination",
    location: "Sawai Madhopur, Rajasthan",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    description: "Immaculate perimeter pool reflection lights, brass lantern walkway paths, and golden Edison string arrays.",
    order: 4
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/suraj_light_house');
    console.log('✨ Connected to MongoDB for seeding Suraj Light House portfolio...');
    
    await PortfolioItem.deleteMany();
    await PortfolioItem.insertMany(portfolioItems);

    console.log('✅ Seeded Suraj Light House portfolio items successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
