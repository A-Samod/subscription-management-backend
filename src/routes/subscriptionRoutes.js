const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const verifyToken = require('../middlewares/auth');
const verifyRole = require('../middlewares/role');

router.post('/', verifyToken, verifyRole(['admin']), subscriptionController.create);
router.get('/:id', verifyToken, verifyRole(['admin']), subscriptionController.findById);
router.get('/', verifyToken, verifyRole(['admin']), subscriptionController.findAll);
router.put('/:id', verifyToken, verifyRole(['admin']), subscriptionController.update);
router.delete('/:id', verifyToken, verifyRole(['admin']), subscriptionController.delete);

module.exports = router;
