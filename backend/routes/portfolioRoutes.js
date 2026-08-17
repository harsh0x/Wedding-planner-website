const express = require('express');
const router = express.Router();
const { getPortfolio } = require('../controllers/portfolioController');

router.route('/')
  .get(getPortfolio);

module.exports = router;
