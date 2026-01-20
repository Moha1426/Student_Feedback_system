const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    permissionId: {
      type: String,
      required: true,
      unique: true,
      trim: true, // PERM_FEEDBACK_CREATE
    },
    name: {
      type: String,
      required: true, // Create Feedback
      trim: true,
    },
    key: {
      type: String,
      required: true,
      unique: true, // feedback:create
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

module.exports = mongoose.model("Permission", permissionSchema);
