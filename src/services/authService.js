const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class AuthService {
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    return await userRepository.create(userData);
  }

  async login(username, password) {
    const user = await userRepository.findByUsername(username);
    if (!user) throw new Error('User not found');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid password');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    return { token, user };
  }
}

module.exports = new AuthService();
