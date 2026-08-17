const Subscriber = require('../models/Subscriber');

// @desc    Subscribe to newsletter
// @route   POST /api/subscribers
// @access  Public
exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email, source } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to Élan Weddings tips & inspo!',
        data: existing
      });
    }

    const subscriber = await Subscriber.create({
      email: email.toLowerCase().trim(),
      source: source || 'newsletter_section'
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing! Your wedding planning eBook is on its way.',
      data: subscriber
    });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error subscribing to newsletter.'
    });
  }
};

// @desc    Get all subscribers
// @route   GET /api/subscribers
// @access  Private
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
