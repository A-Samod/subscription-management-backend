const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:userId", userController.getUserById);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
