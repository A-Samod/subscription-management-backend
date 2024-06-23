const Payment = require('../models/paymentModel');

class PaymentRepository {
  async create(paymentData) {
    const payment = new Payment(paymentData);
    return await payment.save();
  }

  async findByUserId(userId) {
    return await Payment.find({ userId });
  }

  async findById(id) {
    return await Payment.findById(id);
  }

  async updateById(id, updateData) {
    return await Payment.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return await Payment.findByIdAndDelete(id);
  }
}

module.exports = new PaymentRepository();
