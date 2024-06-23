const express = require("express");
const groupController = require("../controllers/groupController");
const router = express.Router();

router.post("/groups", groupController.createGroup);
router.get("/groups", groupController.getAllGroups);
router.get("/groups/:groupId", groupController.getGroupById);
router.put("/groups/:groupId", groupController.updateGroup);
router.delete("/groups/:groupId", groupController.deleteGroup);

module.exports = router;
