const subscriptionRepository = require('../repositories/subscriptionRepository');

class SubscriptionService {
  async createSubscription(subscriptionData) {
    return await subscriptionRepository.create(subscriptionData);
  }

  async getSubscriptionById(id) {
    return await subscriptionRepository.findById(id);
  }

  async getAllSubscriptions() {
    return await subscriptionRepository.findAll();
  }

  async updateSubscription(id, updateData) {
    return await subscriptionRepository.updateById(id, updateData);
  }

  async deleteSubscription(id) {
    return await subscriptionRepository.deleteById(id);
  }
}

module.exports = new SubscriptionService();
