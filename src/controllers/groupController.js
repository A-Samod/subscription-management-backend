const groupService = require("../services/groupService");

class GroupController {
  async createGroup(req, res) {
    try {
      const group = await groupService.createGroup(req.body);
      res.status(201).json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllGroups(req, res) {
    try {
      const groups = await groupService.getAllGroups();
      res.status(200).json(groups);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getGroupById(req, res) {
    try {
      const group = await groupService.getGroupById(req.params.groupId);
      if (!group) {
        return res.status(404).json({ message: "Group not found" });
      }
      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateGroup(req, res) {
    try {
      const group = await groupService.updateGroup(
        req.params.groupId,
        req.body
      );
      if (!group) {
        return res.status(404).json({ message: "Group not found" });
      }
      res.status(200).json(group);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteGroup(req, res) {
    try {
      const group = await groupService.deleteGroup(req.params.groupId);
      if (!group) {
        return res.status(404).json({ message: "Group not found" });
      }
      res.status(200).json({ message: "Group deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new GroupController();
