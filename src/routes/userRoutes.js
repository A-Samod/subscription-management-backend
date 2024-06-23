const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');
const verifyRole = require('../middlewares/role');

router.get('/payments', verifyToken, verifyRole(['admin', 'member']), async (req, res) => {
  // Get user payments logic here
});

router.post('/payments', verifyToken, verifyRole(['admin', 'member']), async (req, res) => {
  // Add payment logic here
});

module.exports = router;
