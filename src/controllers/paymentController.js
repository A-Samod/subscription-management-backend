const paymentService = require('../services/paymentService');

exports.addPayment = async (req, res) => {
  try {
    const payment = await paymentService.addPayment(req.user._id, req.body);
    res.status(201).send(payment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserPayments = async (req, res) => {
  try {
    const payments = await paymentService.getUserPayments(req.user._id);
    res.status(200).send(payments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
