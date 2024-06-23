const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { token, user } = await authService.login(req.body.username, req.body.password);
    res.header('auth-token', token).send({ token, user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
