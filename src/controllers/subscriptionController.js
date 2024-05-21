const subscriptionService = require('../services/subscriptionService');

class SubscriptionController {
  async create(req, res) {
    try {
      const subscription = await subscriptionService.createSubscription(req.body);
      res.status(201).json(subscription);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const subscription = await subscriptionService.getSubscriptionById(req.params.id);
      if (subscription) {
        res.status(200).json(subscription);
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const subscriptions = await subscriptionService.getAllSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const subscription = await subscriptionService.updateSubscription(req.params.id, req.body);
      if (subscription) {
        res.status(200).json(subscription);
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const subscription = await subscriptionService.deleteSubscription(req.params.id);
      if (subscription) {
        res.status(200).json({ message: 'Subscription deleted' });
      } else {
        res.status(404).json({ message: 'Subscription not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SubscriptionController();
