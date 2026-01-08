const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  phone: String,
  age: Number,
  course: String,
  address: String
}, { timestamps: true });

module.exports = mongoose.model("Teacher", TeacherSchema);
