const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(404).send('User not found');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('auth-token', token).send({ token });
});

module.exports = router;
