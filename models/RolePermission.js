const mongoose = require("mongoose");

const rolePermissionSchema = new mongoose.Schema(
  {
    roleId: {
      type: String,
      required: true,
      trim: true, // ROLE_ADMIN
    },
    permissionKeys: [
      {
        type: String,
        required: true, // ["user:create","feedback:read"]
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

// Hal role = hal document
rolePermissionSchema.index({ roleId: 1 }, { unique: true });

module.exports = mongoose.model("RolePermission", rolePermissionSchema);
