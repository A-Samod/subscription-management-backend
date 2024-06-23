const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const verifyToken = require('../middlewares/auth');
const verifyRole = require('../middlewares/role');

router.post('/', verifyToken, verifyRole(['admin', 'member']), paymentController.addPayment);
router.get('/', verifyToken, verifyRole(['admin', 'member']), paymentController.getUserPayments);

module.exports = router;
