const express = require("express");
const bodyParser = require("body-parser");
const groupRoutes = require("./src/routes/groupRoutes");
const userRoutes = require("./src/routes/userRoutes");

const connectDB = require("./src/config/db");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", groupRoutes);
app.use("/api", userRoutes);

module.exports = app;
