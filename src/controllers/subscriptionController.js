const subscriptionService = require('../services/subscriptionService');

exports.create = async (req, res) => {
  try {
    const subscription = await subscriptionService.createSubscription(req.body);
    res.status(201).send(subscription);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const subscription = await subscriptionService.getSubscriptionById(req.params.id);
    if (!subscription) return res.status(404).send('Subscription not found');
    res.status(200).send(subscription);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.status(200).send(subscriptions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const subscription = await subscriptionService.updateSubscription(req.params.id, req.body);
    if (!subscription) return res.status(404).send('Subscription not found');
    res.status(200).send(subscription);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const subscription = await subscriptionService.deleteSubscription(req.params.id);
    if (!subscription) return res.status(404).send('Subscription not found');
    res.status(200).send('Subscription deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
