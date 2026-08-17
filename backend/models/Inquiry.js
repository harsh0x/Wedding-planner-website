const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    partnerName: {
      type: String,
      trim: true,
      default: ''
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    guests: {
      type: String,
      default: '150+'
    },
    service: {
      type: String,
      default: 'Full Wedding Planning'
    },
    vision: {
      type: String,
      maxlength: [3000, 'Vision text cannot exceed 3000 characters'],
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'scheduled', 'booked', 'archived'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
