const Subscription = require('../models/subscriptionModel');

class SubscriptionRepository {
  async create(subscriptionData) {
    const subscription = new Subscription(subscriptionData);
    return await subscription.save();
  }

  async findById(id) {
    return await Subscription.findById(id);
  }

  async findAll() {
    return await Subscription.find();
  }

  async updateById(id, updateData) {
    return await Subscription.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return await Subscription.findByIdAndDelete(id);
  }
}

module.exports = new SubscriptionRepository();
