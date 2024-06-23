const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  platform: { type: String, required: true, enum: ['spotify', 'youtube'] },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
