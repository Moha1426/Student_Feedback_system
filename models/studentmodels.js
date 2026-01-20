const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  course: String,
  age: Number,
  phone: String,
  level: String
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);
