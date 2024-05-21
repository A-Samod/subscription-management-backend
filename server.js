const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Authentication Middleware
const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

// Routes
const subscriptionRoutes = require('./src/routes/subscriptionRoutes');
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/subscriptions', verifyToken, subscriptionRoutes);
app.use('/api/user', userRoutes);

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
