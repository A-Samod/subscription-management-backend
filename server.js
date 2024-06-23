const app = require('./app');
const connectDB = require('./src/config/db');
const dotenv = require('dotenv');
dotenv.config();

// Connect to database
connectDB();
console.log("port >>>", process.env.PORT);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
