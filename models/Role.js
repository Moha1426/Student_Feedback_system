const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    roleId: {
      type: String,
      required: true,
      unique: true,
      trim: true, // ROLE_ADMIN
    },
    name: {
      type: String,
      required: true,
      unique: true, // Admin / Teacher / Student
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);
