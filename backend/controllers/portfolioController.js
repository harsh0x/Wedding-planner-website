const PortfolioItem = require('../models/PortfolioItem');

// Fallback seed portfolio data if database is empty
const defaultPortfolio = [
  {
    title: "The Coral Gables Estate Celebration",
    category: "Full Planning & Styling",
    location: "Miami, Florida",
    imageUrl: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85",
    description: "An enchanting blush and dusty rose outdoor celebration accented by bespoke floral tunnels, champagne towers, and sunset vows.",
    order: 1
  },
  {
    title: "Boca Raton Coastal Romance",
    category: "Floral & Ceremony Design",
    location: "Palm Beach, Florida",
    imageUrl: "https://images.unsplash.com/photo-1519225429875-927917e3f84f?auto=format&fit=crop&w=1200&q=85",
    description: "Lavish oceanfront pergola draped in cascading hydrangeas, garden roses, and romantic candlelight.",
    order: 2
  },
  {
    title: "The Breakers Grand Ballroom Gala",
    category: "Full Production & Lighting",
    location: "Palm Beach, Florida",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    description: "Opulent crystal chandeliers, dramatic high-centerpiece installations, and an electric live 10-piece orchestra.",
    order: 3
  },
  {
    title: "Sunlit Golden Hour Vows",
    category: "Bespoke Styling",
    location: "Naples, Florida",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    description: "Intimate, ethereal garden nuptials featuring custom botanical typography and curated vintage lounge vignettes.",
    order: 4
  }
];

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
exports.getPortfolio = async (req, res) => {
  try {
    let items = await PortfolioItem.find().sort({ order: 1 });
    if (!items || items.length === 0) {
      items = defaultPortfolio;
    }
    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    // Return default items gracefully if DB is disconnected
    res.status(200).json({
      success: true,
      count: defaultPortfolio.length,
      data: defaultPortfolio
    });
  }
};
