const Group = require("../models/groupModel");

class GroupRepository {
  async createGroup(group) {
    return await Group.create(group);
  }

  async getAllGroups() {
    return await Group.find().populate("ownerId members");
  }

  async getGroupById(groupId) {
    return await Group.findById(groupId).populate("ownerId members");
  }

  async updateGroup(groupId, groupData) {
    return await Group.findByIdAndUpdate(groupId, groupData, { new: true });
  }

  async deleteGroup(groupId) {
    return await Group.findByIdAndDelete(groupId);
  }
}

module.exports = new GroupRepository();
