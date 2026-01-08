const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  accountType: {
    type: String,
    enum: ["admin", "teacher", "student"],
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Account", AccountSchema);
