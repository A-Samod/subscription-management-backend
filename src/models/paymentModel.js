const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true },
  platform: { type: [String], required: true, enum: ['spotify', 'youtube'] },
  month: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
  remarks : { type: String },
  attachments : { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt :{ type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
