const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  courseName: String,
  teacherId: String
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);
