const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    roleId: {
      type: String,
      required: true,
      trim: true, // ROLE_ADMIN | ROLE_TEACHER | ROLE_STUDENT
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
