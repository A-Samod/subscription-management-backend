const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

router.post('/', subscriptionController.create);
router.get('/:id', subscriptionController.findById);
router.get('/', subscriptionController.findAll);
router.put('/:id', subscriptionController.update);
router.delete('/:id', subscriptionController.delete);

module.exports = router;
