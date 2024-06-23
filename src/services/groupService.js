const groupRepository = require("../repositories/groupRepository");

class GroupService {
  async createGroup(groupData) {
    return await groupRepository.createGroup(groupData);
  }

  async getAllGroups() {
    return await groupRepository.getAllGroups();
  }

  async getGroupById(groupId) {
    return await groupRepository.getGroupById(groupId);
  }

  async updateGroup(groupId, groupData) {
    return await groupRepository.updateGroup(groupId, groupData);
  }

  async deleteGroup(groupId) {
    return await groupRepository.deleteGroup(groupId);
  }
}

module.exports = new GroupService();
