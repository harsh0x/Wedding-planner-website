const express = require('express');
const router = express.Router();
const { subscribeNewsletter, getSubscribers } = require('../controllers/subscriberController');

router.route('/')
  .post(subscribeNewsletter)
  .get(getSubscribers);

module.exports = router;
