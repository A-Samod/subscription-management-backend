const paymentRepository = require('../repositories/paymentRepository');

class PaymentService {
  async addPayment(userId, paymentData) {
    paymentData.userId = userId;
    return await paymentRepository.create(paymentData);
  }

  async getUserPayments(userId) {
    return await paymentRepository.findByUserId(userId);
  }
}

module.exports = new PaymentService();
