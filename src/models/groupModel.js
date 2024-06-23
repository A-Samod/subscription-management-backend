const mongoose = require("mongoose");
const userModel = require("./userModel");

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  ownerId: { type: String, required: true },
  members: [{ type: String }],
});

module.exports = mongoose.model("Group", groupSchema);
