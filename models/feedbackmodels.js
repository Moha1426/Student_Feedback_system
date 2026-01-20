const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  feedbackId: {
    type: String,
    required: true,
    unique: true
  },
  studentId: {
    type: String,
    required: true
  },
  teacherId: {
    type: String,
    required: true
  },
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
