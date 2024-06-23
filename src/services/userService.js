const userRepository = require("../repositories/userRepository");

class UserService {
  async createUser(userData) {
    return await userRepository.createUser(userData);
  }

  async getUserById(userId) {
    return await userRepository.findUserById(userId);
  }

  async updateUser(userId, userData) {
    return await userRepository.updateUser(userId, userData);
  }

  async deleteUser(userId) {
    return await userRepository.deleteUser(userId);
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }
}

module.exports = new UserService();
