const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  phone: String,
  age: Number,
  address: String
}, { timestamps: true });

module.exports = mongoose.model("Admin", AdminSchema);
